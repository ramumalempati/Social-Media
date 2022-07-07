export async function fetchData(route = '', requestBody = {}, requestMethod) {
    const res = await fetch(`${route}`, {
        method: requestMethod,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    });
    if (res.ok) {
        return await res.json();
    } else {
        throw await res.json();
    }
}