import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  
  const { user, logoutUser } = useContext(UserContext);
  const navigate = useNavigate();

  if(!user) {
    return <p>No user logged in</p>
  }

  const handleLogout = () => {
    logoutUser();
    navigate("/")
  }

  return (
    <div>
      <p>{user?.name}</p>
      <p>{user?.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile;