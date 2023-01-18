import {createContext} from "react";

export const AuthContext = createContext<AuthContextType>(null)

export type AuthContextType = { isAuth: boolean , setIsAuth: (value: boolean) => void } | null