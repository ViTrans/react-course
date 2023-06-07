import { createContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider(children) {
  const [user, setUser] = useState({
    userId: 1,
    fullname: "Vi Tran 2222",
    email: "tran.vi487@gmail.com",
    avatar: "https://source.unsplash.com/random",
  });
  const value = { user, setUser };
  return (
    <AuthContext.Provider value={value} {...children}></AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
