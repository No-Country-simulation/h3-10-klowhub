"use client";

import {
  createContext,
  useCallback,
  useMemo,
  useState,
} from "react";

import {
  tokenData,
  AuthTokens,
  AuthContextProps,
} from "../services/Interfaces";

import {jwtDecode} from 'jwt-decode';
import { toast } from "react-toastify";
import { API_URL } from "../../api";
const AUTH_TOKEN_KEY = "TOKEN_KEY";
const AUTH_INFO_USER = "USER_INFO";
export const AuthContext = createContext<AuthContextProps>({
  login: () => { },
  logout: () => { },
  authTokens: null,
  isLoggedIn: false,
  userName: "",
});

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const authTokensInLocalStorage =
    typeof window !== "undefined"
      ? window.localStorage.getItem(AUTH_INFO_USER)
      : null;

  const [authTokens, setAuthTokens] = useState<AuthTokens | null>(
    authTokensInLocalStorage ? JSON.parse(authTokensInLocalStorage) : null
  );

  const [userName, setUserName] = useState<string>(
    authTokensInLocalStorage ? JSON.parse(authTokensInLocalStorage).email : ""
  );

  const login = useCallback(async (email: string, password: string) => {
    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (res.status === 401 || res.status === 400) {
        toast.warning("El email o contraseña son incorrectos");
      }

      if (!res.ok) {
        throw new Error("Failed to login");
      }

      const data = await res.json();

      if (data.token) {
        toast.success("¡Inicio de sesión exitoso!");
        window.location.href = "/home";
        const token = data.token;
        const infoToken: tokenData = jwtDecode(token);
        const dataToken: AuthTokens = {
          token: token,
          email: infoToken.fullName,
          iat: infoToken.iat,
          exp: infoToken.exp,
          authorities: infoToken.authorities,
        };
        setAuthTokens(dataToken);
        window.localStorage.setItem(AUTH_INFO_USER, JSON.stringify(dataToken));
        window.localStorage.setItem(AUTH_TOKEN_KEY, data.token);
      }
    } catch (err) {
      console.log(err);
    }
  }, []); // Empty dependency array ensures this function is memoized

  const logout = useCallback(() => {
    window.localStorage.removeItem(AUTH_TOKEN_KEY);
    window.localStorage.removeItem(AUTH_INFO_USER);
    setAuthTokens(null);
    setUserName("");
  }, []);

  const value = useMemo<AuthContextProps>(
    () => ({
      login,
      logout,
      authTokens,
      userName,
      isLoggedIn: !!authTokens,
    }),
    [authTokens, login, logout, userName] // Add 'login' here
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};