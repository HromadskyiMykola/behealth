import { ReactNode, useState } from "react";

import { AuthContext } from "~/context";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState<"doctor" | "patient" | null>(null);

  const login = ()=> {}
  const logout = ()=> {}
    
    
    
    
  return (
    <AuthContext.Provider value={{ isLoggedIn, userType, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
