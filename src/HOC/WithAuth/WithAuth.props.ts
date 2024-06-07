import { User } from "firebase/auth";

export interface IWithAuthProps {
    isAuthenticated: boolean;
    currentUser: User | null;
  }