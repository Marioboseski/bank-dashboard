import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import validateEditProfile from "../../utils/validateEditProfile";

const EditProfile = () => {

  const navigate = useNavigate();

  const { user, updateUser } = useContext(UserContext);

  if (!user) return null;

  const { values, errors, handleChange, handleSubmit } = useForm({ name: user.name, email: user.email }, validateEditProfile, (values) => { updateUser(values); navigate("/profile") });

  return (
    <div className="container">
      <div className="flex flex-col justify-center items-center text-center gap-3 p-3">
        <form onSubmit={handleSubmit} className="flex flex-col justify-evenly items-center gap-3 w-full max-w-[500px] min-h-[80vh] border-2 border-gray-400 rounded-lg">
          <h3 className="text-3xl border-b-2 ">Change your personal information</h3>

          <div className="forms-divs-inputs">
            <input
              name="name"
              type="text"
              value={values.name}
              onChange={handleChange}
              className="border-2 border-gray-400 rounded-md p-1 text-xl w-full max-w-[350px]" />
            {errors.name && (
              <p className="forms-errors">{errors.name}</p>
            )}
          </div>

          <div className="forms-divs-inputs">
            <input
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              className="border-2 border-gray-400 rounded-md p-1 text-xl w-full max-w-[350px]" />
            {errors.email && (
              <p className="forms-errors">{errors.email}</p>
            )}
          </div>

          <button type="submit" className=" p-1 text-lg bg-blue-300 hover:bg-blue-500 rounded-md w-full max-w-[250px]">Save changes</button>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;