import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect, ReactNode } from "react";
import { auth } from "../../../firebase";

export interface INotAuthenticated {
  children: ReactNode;
}

const NotAuthenticated = ({ children }: INotAuthenticated) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  useEffect(() => {
    const authState = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });

    return authState;
  }, []);

  return !isAuthenticated ? children : null;
};

export default NotAuthenticated;
