import { ReactNode, createContext, useContext, useState } from "react";
import { apiService, TLoginData, TLoginResponse } from "~/common";

interface AuthContextData {
  authenticatedUser: { token: string; type: string } | null;
  login: (data: TLoginData) => Promise<TLoginResponse>;
  logout: () => void;
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

  const login = async ({
    email,
    password,
    user_type,
    rememberMe,
  }: TLoginData) => {
    const response = await apiService.login({ email, password, user_type });

    if (response.token) {
      const user = { ...response, type: user_type };
      const storage = rememberMe ? localStorage : sessionStorage;

      storage.setItem("user", JSON.stringify(user));
      setUser(user);

      return user;
    }
  };

  const logout = () => {
    apiService.logout();
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ authenticatedUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
