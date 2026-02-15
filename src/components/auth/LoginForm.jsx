import useForm from "../../hooks/useForm";
import validateLoginForm from "../../utils/validateLoginForm";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const initialValues = {
  name: "",
  email: "",
  password: ""
};

const LoginForm = () => {

  const { loginUser } = useContext(UserContext);
  const navigate = useNavigate()

  const handleLogin = (data) => {
    const { password, ...userData } = data;
    loginUser(userData);
    navigate("/dashboard")
  }

  const { errors, values, handleChange, handleSubmit } = useForm(initialValues, validateLoginForm, handleLogin);

  return (
    <div className="flex justify-center items-center text-center w-full p-3">
      <form onSubmit={handleSubmit} className="flex flex-col justify-evenly items-center min-h-[550px] border-2 w-full max-w-[500px]">

        <div className="forms-divs-inputs">
          <input type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Name"
            className="forms-inputs" />
          {errors.name && <p className="forms-errors">{errors.name}</p>}
        </div>

        <div className="forms-divs-inputs">
          <input type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Email"
            className="forms-inputs" />
          {errors.email && <p className="forms-errors">{errors.email}</p>}
        </div>

        <div className="forms-divs-inputs">
          <input type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            placeholder="*******"
            className="forms-inputs" />
          {errors.password && <p className="forms-errors">{errors.password}</p>}
        </div>

        <button type="submit" className="border-2 p-1 w-full max-w-32 text-lg border-black rounded-md">Log in</button>
      </form>
    </div>
  );
}

export default LoginForm;
