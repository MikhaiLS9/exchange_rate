import { User, onAuthStateChanged } from "firebase/auth";
import { FC, ReactElement, ComponentType, useEffect, useState } from "react";
import { auth } from "../../firebase";
import { IWithAuthProps } from "./WithAuth.props";

const WithAuth = <T extends IWithAuthProps>(Component: ComponentType<T>) => {

  const WithAuthComponent: FC<Omit<T, keyof IWithAuthProps>> = (props): ReactElement => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (user) => {
        setCurrentUser(user);
      });

      return () => unSubscribe();
    }, []);

    const isAuthenticated = !!currentUser;
    const componentProps = { ...props, isAuthenticated, currentUser } as T;

    return <Component {...componentProps} />;
  };

  return WithAuthComponent;
};

export default WithAuth;