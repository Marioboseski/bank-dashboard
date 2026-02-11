import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
import { useState } from "react";

const Auth = () => {
  
  const [ logged, setLogged ] = useState(false);

  const toggleAuthMode = () => {
    setLogged(prev => !prev)
  }

  return (
    <div>
      {logged ? <LoginForm/> : <RegisterForm/>}
      <button onClick={toggleAuthMode}>{logged ? "Don't have an account? Register" : "Already have an account? Login"}</button>
    </div>
  );
}

export default Auth;