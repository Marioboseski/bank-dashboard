import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import { FinanceContext } from "../../context/FinanceContext";
import { useNavigate } from "react-router-dom";
import { CircleOff } from "lucide-react";
import { Link } from "react-router-dom";

const Profile = () => {

  const { user, logoutUser } = useContext(UserContext);
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="flex flex-col justify-center items-center gap-2 min-h-dvh">
        <CircleOff className="w-full max-w-32 min-h-32"/>
        <p>No user logged in</p>
      </div>
    )
  }

  const handleLogout = () => {
    logoutUser();
    navigate("/")
  }

  const { balance } = useContext(FinanceContext);
  const firstLetter = user.name?.charAt(0).toUpperCase();

  const formattedBalance = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
  }).format(balance);

  return (
    <div className="container">
    <div className="flex justify-center items-center min-h-dvh p-3">
      <div className="flex flex-col justify-center items-center w-full gap-3 p-3 border-2 border-gray-300 rounded-xl shadow-lg">
        <p className="flex justify-center items-center bg-blue-300 border-2 border-blue-600 rounded-full w-full max-w-36 min-h-36 text-3xl">{firstLetter}</p>
        <p className="font-semibold text-2xl">{user?.name}</p>
        <p className="text-lg">{user?.email}</p>
        <div className="flex flex-col justify-center items-center text-center gap-3 border-2 border-gray-300 rounded-lg w-full max-w-64 min-h-40">
          <p className="text-xl text-gray-500">Current balance</p>
          <p className="text-xl border-b-2 border-gray-300 p-1">{formattedBalance}</p>
          <Link to={"/profile/edit"} className="bg-blue-300 border-2 border-blue-400 text-lg text-blue-600 rounded-md  p-1 w-full max-w-40 hover:bg-blue-400">Edit profile</Link>
        </div>
        <button onClick={handleLogout} className="bg-gray-300 border-2 border-black/80 rounded-md text-lg p-1 w-full max-w-24 hover:bg-gray-100">Logout</button>
      </div>
    </div>
    </div>
  );
}

export default Profile;