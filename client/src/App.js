import './App.css';
import LoginForm from './components/login';
import NavBar from './components/NavBar.js';
import RegisterForm from './components/register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './components/profile';
const navLinks = [
  {
    text: "Profile",
    url: "/profile"
  },
  {
    text: "Login",
    url: "/login"
  },
  {
    text: "Register",
    url: "/register"
  }
];
function App() {
  return (
    <div className="App h-100" >
      <BrowserRouter>
        <Routes>
          <Route element={<NavBar navLinks={navLinks} />}>
            <Route index element={<LoginForm ></LoginForm>} />
            <Route path="login" element={<LoginForm ></LoginForm>} />
            <Route path="register" element={<RegisterForm />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
