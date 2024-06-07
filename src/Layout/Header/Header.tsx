import { FC } from "react";
import { IHeaderProps } from "./Header.props";
import Navigation from "../components/Navigation/Navigation";
import AuthButtons from "../../components/AuthButtons/AuthButtons";
import logoSvg from '../../../public/exchange-logo.svg'
import styles from "./Header.module.css";

const Header: FC<IHeaderProps> = () => {
  return (
    <header className={styles.header}>
      <img src={logoSvg} alt="logo" className={styles.logo} />
      <div className={styles.nav}>
        <Navigation />
      </div>
      <div className={styles.buttons}>
        <AuthButtons />
      </div>
      
    </header>
  );
};

export default Header;
