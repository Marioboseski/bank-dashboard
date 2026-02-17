import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [ user, setUser ] = useState(null);

  const loginUser = (data) => {
    setUser(data);
  }

  const logoutUser = () => {
    setUser(null);
  };

  const updateUser = (updatedData) => {
    setUser((prev) => ({
      ...prev,
      ...updatedData,
    }));
  };

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser, updateUser }}>
      { children }
    </UserContext.Provider>
  );

}

export default UserProvider;