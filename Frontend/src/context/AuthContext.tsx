"use client";

import { createContext, useCallback, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import { API_URL } from "../../api";
import { tokenData, AuthTokens, AuthContextProps } from "../services/Interfaces";

const AUTH_TOKEN_KEY = "TOKEN_KEY";
const AUTH_INFO_USER = "USER_INFO";

export const AuthContext = createContext<AuthContextProps>({
  login: () => {},
  logout: () => {},
  authTokens: null,
  isLoggedIn: false,
  userName: "",
  register: () => {},
  paypal_order: () => {}
});

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const authTokensInLocalStorage = typeof window !== "undefined"
    ? JSON.parse(window.localStorage.getItem(AUTH_INFO_USER) || 'null')
    : null;

  const [authTokens, setAuthTokens] = useState<AuthTokens | null>(authTokensInLocalStorage);
  const [userName, setUserName] = useState<string>(authTokensInLocalStorage ? authTokensInLocalStorage.email : "");

  const login = useCallback(async (email: string, password: string) => {
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to login");
      }

      const data = await response.json();

      if (data.token) {
        toast.success("¡Inicio de sesión exitoso!");
        const token = data.token;
        const decodedToken: tokenData = jwtDecode(token);
        const dataToken: AuthTokens = {
          token,
          email: decodedToken.fullName,
          iat: decodedToken.iat,
          exp: decodedToken.exp,
          authorities: decodedToken.authorities,
        };

        setAuthTokens(dataToken);
        window.localStorage.setItem(AUTH_INFO_USER, JSON.stringify(dataToken));
        window.localStorage.setItem(AUTH_TOKEN_KEY, data.token);
        window.location.href = "/";
      } else {
        toast.warning("El email o contraseña son incorrectos");
      }
    } catch (error) {
      console.error("Error de autenticación:", error);
    }
  }, []);

  const logout = useCallback(() => {
    window.localStorage.removeItem(AUTH_TOKEN_KEY);
    window.localStorage.removeItem(AUTH_INFO_USER);
    setAuthTokens(null);
    setUserName("");
  }, []);

  const register = useCallback(async (name: string, email: string, password: string) => {
    try {
      const response = await fetch(`${API_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to Register");
      }

      toast.success("¡Registro exitoso!");
      window.location.href = "/login";
    } catch (error) {
      console.error("Error de registro:", error);
      toast.error("Error en el Registro");
    }
  }, []);

  const value = useMemo<AuthContextProps>(() => ({
    login,
    logout,
    authTokens,
    userName,
    isLoggedIn: !!authTokens,
    register,
    paypal_order: () => {}
  }), [authTokens, login, logout, userName, register]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
