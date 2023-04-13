import { ReactNode, createContext, useContext, useState } from "react";

import { TSignInProvider } from "~/common";

interface AuthContextData {
  authenticatedUser: { token: string; type: string } | null;
  singInProvider: (data: TSignInProvider) => void;
  singOutProvider: () => void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const useAuth = () => useContext(AuthContext);

const getCurrentUser = () => {
  const user = localStorage.getItem("user") || sessionStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authenticatedUser, setUser] = useState(getCurrentUser());

  const singInProvider = async ({
    token,
    type,
    rememberMe,
  }: TSignInProvider) => {
    const user = { token, type };
    const storage = rememberMe ? localStorage : sessionStorage;

    storage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  const singOutProvider = () => {
    // apiService.logout();
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ authenticatedUser, singInProvider, singOutProvider }}
    >
      {children}
    </AuthContext.Provider>
  );
};
