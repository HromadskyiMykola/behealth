import { createContext, useContext, useState, useEffect } from "react";
// import AuthService from "../services/authService";
import { TLoginData } from "~/common";

interface AuthContextData {
  // isLoggedIn: boolean;
  user: any;
  // userType: "doctor" | "patient" | null;
  login: (data: TLoginData) => Promise<void>;
  logout: () => void;
}

// export const AuthContext = createContext({});
export const AuthContext = createContext<AuthContextData>({} as AuthContextData);
