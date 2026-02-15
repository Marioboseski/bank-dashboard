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

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      { children }
    </UserContext.Provider>
  );

}

export default UserProvider;