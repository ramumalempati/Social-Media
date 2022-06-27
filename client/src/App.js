import './App.css';
import LoginForm from './components/login';
import NavBar from './components/NavBar.js';
import RegisterForm from './components/register';
const navLinks = [
  {
    text: "Profile",
    url: "#"
  },
  {
    text: "Login",
    url: "#loginForm"
  },
  {
    text: "Register",
    url: "#registerForm"
  }
];
function App() {
  return (
    <div className="App h-100" >
      <NavBar navLinks={navLinks} />
      <LoginForm></LoginForm>
      <RegisterForm></RegisterForm>
    </div>
  );
}

export default App;
