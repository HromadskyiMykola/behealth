import { ReactNode, createContext, useContext, useState } from "react";

import { EUserType } from "~/common";

type TSignInProvider = {
  rememberMe?: boolean;
  token: string;
  type: EUserType;
};

interface AuthContextData {
  authenticatedUser: { token: string; type: string } | null;
  singInProvider: (data: TSignInProvider) => void;
  singOutProvider: () => void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const useAuthProvider = () => useContext(AuthContext);

const getCurrentUser = (): { token: string; type: string } | null => {
  const userString =
    localStorage.getItem("user") || sessionStorage.getItem("user");

  if (userString) {
    const user = JSON.parse(userString);

    if (Object.hasOwn(user, "token")) return user;
  }
  return null;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authenticatedUser, setUser] = useState(getCurrentUser());
  const singInProvider = ({ token, type, rememberMe }: TSignInProvider) => {
    const user = { token, type };
    const storage = rememberMe ? localStorage : sessionStorage;

    storage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  const singOutProvider = () => {
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
