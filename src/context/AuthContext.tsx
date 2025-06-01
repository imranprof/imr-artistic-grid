"use client"

import React, {createContext, useState, useContext, useEffect, ReactNode} from 'react';
import {getCurrentUser, logout} from "@/lib/api"

type AuthContextType = {
  user: any;
  isAuthenticated: boolean;
  setUser: (user: any) => void;
  logoutUser: () => void;
  loading: boolean;
};


const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  setUser: () => {},
  logoutUser: () => {},
  loading: true
});

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setIsLoading] = useState(true);

  useEffect(()=>{
    const checkUser = async () =>{
      try {
        const data = await getCurrentUser();
        setUser(data);
      }
      catch (error) {
        console.log('Not logged in');
      }
      finally {
        setIsLoading(false);
      }
    }
    checkUser();
  }, [])

  const logoutUser = async () => {
    await logout();
    setUser(null);
  }

  return (
    <AuthContext.Provider 
    value={{
      user, 
      isAuthenticated: !!user,
      setUser,
      logoutUser,
      loading
    }}
    >
      {children}
    </AuthContext.Provider>
  )

};

export const useAuth = () => useContext(AuthContext);