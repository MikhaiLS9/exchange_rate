import { FC, useEffect, useState } from "react";
import { IAuthButtonsProps } from "./AuthButtons.props";
import styles from "./AuthButtons.module.css";
import { routers } from "../../helpers/routers/routers";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import Button from "../Button/Button";
import LinkTag from "../LinkTag/LinkTag";

const AuthButtons: FC<IAuthButtonsProps> = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<{
    user: null | string;
    state: boolean;
  }>({
    user: null,
    state: false,
  });
  const logout = () => {
    signOut(auth);
    setIsAuthenticated({ state: false, user: null });
  };

  useEffect(() => {
    const authUser = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated({ state: true, user: user.displayName });
      } else {
        setIsAuthenticated({ state: false, user: null });
      }
    });
    console.log(auth);

    return () => authUser();
  }, []);

  console.log(isAuthenticated);

  return (
    <div className={styles.auth_button_wrapper}>
      {!isAuthenticated.state && (
        <>
          <LinkTag appearance="button" href={routers.login}>
            Войти
          </LinkTag>
          <LinkTag appearance="buttonXl" href={routers.register}>
            Зарегистрироваться
          </LinkTag>
        </>
      )}
      <div className={styles.logout_block}>
        {isAuthenticated?.user}
        {isAuthenticated.state && (
          <Button appearance="medium" onClick={logout}>
            Выйти
          </Button>
        )}
      </div>
    </div>
  );
};

export default AuthButtons;
