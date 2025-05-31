import React, {createContext, useState, useContext, useEffect, ReactNode} from 'react';
import {getCurrentUser, logout} from "@/lib/api"

type AuthContextType = {
  user: any;
  isAuthenticated: boolean;
  setUser: (user: any) => void;
  logoutUser: () => void;
};


const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  setUser: () => {},
  logoutUser: () => {},
});

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(()=>{
    const checkUser = async () =>{
      try {
        const data = await getCurrentUser();
        setUser(data);
      }
      catch (error) {
        console.log('Not logged in');
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
      logoutUser
    }}
    >
      {children}
    </AuthContext.Provider>
  )

};

export const useAuth = () => useContext(AuthContext);