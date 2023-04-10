import { FC, ReactNode, useState } from "react";
import { TLoginData } from "~/common";
import { apiService } from "~/common/apiService";

import { AuthContext } from "~/context";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(apiService.getCurrentUser());

  const login = async (data: TLoginData) => {
    const response = await apiService.login(data);
    setUser(response); // TODO
  };

  const logout = () => {
    apiService.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
