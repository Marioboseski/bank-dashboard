import useForm from "../../hooks/useForm";
import validateRegisterForm from "../../utils/validateRegisterForm";
import { useNavigate } from "react-router-dom";

const initialValues = {
  name: "",
  lastname: "",
  email: "",
  password: "",
  location: "",
}

const RegisterForm = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/dashboard");
  }

  const { errors, values, handleChange, handleSubmit } = useForm(initialValues, validateRegisterForm, handleRegister );
  
  return (
    <div className="flex justify-center items-center text-center w-full p-3">
       <form onSubmit={handleSubmit} className="flex flex-col justify-evenly items-center min-h-[550px] border-2 border-white rounded-lg w-full max-w-[500px]">

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
          <input type="text"
           name="lastname"
           value={values.lastname}
           onChange={handleChange} 
           placeholder="Lastname" 
           className="forms-inputs" />
           {errors.lastname && <p className="forms-errors">{errors.lastname}</p>}
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
           placeholder="******"
           className="forms-inputs" />
           {errors.password && <p className="forms-errors">{errors.password}</p>}
        </div>

        <div className="forms-divs-inputs">
          <input type="text"
           name="location"
           value={values.location}
           onChange={handleChange}
           placeholder="Location"
           className="forms-inputs" />
           {errors.location && <p className="forms-errors">{errors.location}</p>}
        </div>
        
        <button type="submit" className="border-2 p-1 w-full max-w-32 text-lg border-black rounded-md">Register</button>
      </form>
    </div>
  );
}

export default RegisterForm;