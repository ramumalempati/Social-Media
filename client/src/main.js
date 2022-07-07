export async function fetchData(apiRoute = '', requestBody = {}, requestMethod) {
    const res = await fetch(`http://localhost:5000${apiRoute}`, {
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