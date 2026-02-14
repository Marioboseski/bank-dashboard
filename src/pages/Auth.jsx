import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
import { useState } from "react";

const Auth = () => {
  
  const [ logged, setLogged ] = useState(false);

  const toggleAuthMode = () => {
    setLogged(prev => !prev)
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-dvh gap-2 bg-blue-300">
      {logged ? <LoginForm/> : <RegisterForm/>}
      <button onClick={toggleAuthMode} className="border-b border-gray-100">{logged ? "Don't have an account? Register" : "Already have an account? Login"}</button>
    </div>
  );
}

export default Auth;