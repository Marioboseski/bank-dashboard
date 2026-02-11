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
          <input type="text"
           name="lastname"
           value={values.lastname}
           onChange={handleChange} 
           placeholder="Lastname"/>
           {errors.lastname && <p>{errors.lastname}</p>}
        </div>

         <div>
          <input type="email"
           name="email"
           value={values.email}
           onChange={handleChange}
           placeholder="Email" />
           {errors.email && <p>{errors.email}</p>}
        </div>

        <div>
          <input type="password"
           name="password"
           value={values.password}
           onChange={handleChange}
           placeholder="******" />
           {errors.password && <p>{errors.password}</p>}
        </div>

        <div>
          <input type="text"
           name="location"
           value={values.location}
           onChange={handleChange}
           placeholder="Location" />
           {errors.location && <p>{errors.location}</p>}
        </div>
        
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterForm;