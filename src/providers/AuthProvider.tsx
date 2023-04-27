import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { EUserType, TAuthFormValues, useApiService } from "~/common";
import { useModalState } from ".";

type TSignInProvider = {
  rememberMe?: boolean;
  token: string;
  type: EUserType;
};

interface AuthContextData {
  authenticatedUser: { token: string; type: string } | null;
  singInProvider: (data: TSignInProvider) => void;
  singOutProvider: () => void;
  onSubmitSignIn: (data: TAuthFormValues) => Promise<{ success: boolean }>;
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
  const { apiError, loading, auth } = useApiService();
  const { setSimpleModalMessage, setSimpleModalLoading } = useModalState();

  useEffect(() => {
    // since the global context is used, in order to avoid unnecessary re-rendering,
    // perform an additional check
    if (apiError) {
      setSimpleModalLoading(false);
      setSimpleModalMessage(apiError);
    }
    if (loading) setSimpleModalLoading(loading);
  }, [apiError, loading]);

  const singInProvider = ({ token, type, rememberMe }: TSignInProvider) => {
    const user = { token, type };
    const storage = rememberMe ? localStorage : sessionStorage;

    storage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  const onSubmitSignIn = async (data: TAuthFormValues) => {
    const { rememberMe, email, passwordCurrent, userType } = data;

    const token = await auth.signIn({ email, passwordCurrent, userType });

    setSimpleModalLoading(false);

    singInProvider({ token, type: userType, rememberMe });

    return { success: true };
  };

  const singOutProvider = () => {
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        authenticatedUser,
        singInProvider,
        singOutProvider,
        onSubmitSignIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
