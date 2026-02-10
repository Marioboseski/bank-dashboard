import useForm from "../../hooks/useForm";
import validateLoginForm from "../../utils/validateLoginForm";

const initialValues = {
  name: "",
  email: "",
  password: ""
};

const LoginForm = () => {
  
  const { errors, values, handleChange, handleSubmit } = useForm(initialValues, validateLoginForm);

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

      </form>
    </div>
  );
}

export default LoginForm;
