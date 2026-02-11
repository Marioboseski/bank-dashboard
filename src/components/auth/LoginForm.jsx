import useForm from "../../hooks/useForm";
import validateLoginForm from "../../utils/validateLoginForm";
import { useNavigate } from "react-router-dom";

const initialValues = {
  name: "",
  email: "",
  password: ""
};

const LoginForm = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate("/dashboard")
  }
  
  const { errors, values, handleChange, handleSubmit } = useForm(initialValues, validateLoginForm, handleLogin);

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <div>
          <input type="text"
           name="name"
           value={values.name}
           onChange={handleChange}
           placeholder="Name" />
           {errors.name && <p>{errors.name}</p>}
        </div>

         <div>
          <input type="email"
           name="email"
           value={values.email}
           onChange={handleChange} 
           placeholder="Email"/>
           {errors.email && <p>{errors.email}</p>}
        </div>

         <div>
          <input type="password"
           name="password"
           value={values.password}
           onChange={handleChange}
           placeholder="*******" />
           {errors.password && <p>{errors.password}</p>}
        </div>

        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default LoginForm;
