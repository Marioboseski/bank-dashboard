import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {

  const navigate = useNavigate();

  const { user, updateUser } = useContext(UserContext);

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleSubmit = (e) => {
    e.preventDefault();

    updateUser({ name, email });
    navigate("/profile")
  }

  if (!user) return null;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />

          <button type="submit">Save changes</button>
      </form>
    </div>
  );
}

export default EditProfile;