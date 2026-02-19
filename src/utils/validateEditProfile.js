const validateEditProfile = (values) => {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Name required";
  }

  if (!values.email.trim()) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Enter valid email";
  }

  return errors;

};

export default validateEditProfile;