const validateRegisterForm = (values) => {

  const errors = {};

  if(!values.name.trim()) {
    errors.name = "Name required";    
  } 

  if(!values.lastname.trim()) {
    errors.lastname = "Lastname required";
  }

  if(!values.email.trim()) {
    errors.email = "Email required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter valid email";
  }

  if(!values.password) {
    errors.password = "Password required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be atleast six characters";
  } else if (!/[A-Z]/.test(values.password) || (!/[!@#$%^&*(),.?":{}|<>]/.test(values.password))) {
    errors.password = "Atleast one upper case and one special character";
  }

  if(!values.location) {
    errors.location = "Location required";
  }

  return errors;

}

export default validateRegisterForm;