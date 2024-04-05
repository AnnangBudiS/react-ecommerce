import { createContext, useContext, useEffect, useState } from "react";

const AuthCtx = createContext();

export const useAuth = () => {
  return useContext(AuthCtx);
};

export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState({
    user: null,
    token: localStorage.getItem("token") || null,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuth({ user: null, token: token });
    }
  }, []);

  function login(dataUser, token) {
    setAuth({ user: dataUser, token: token });
    localStorage.setItem("token", token);
  }

  function logout() {
    setAuth({ user: null, token: null });
    localStorage.removeItem("token");
  }

  const values = {
    ...auth,
    login,
    logout,
  };

  return <AuthCtx.Provider value={values}>{children}</AuthCtx.Provider>;
}
