import { FC } from "react";
import { IMainProps } from "./Main.props";
import styles from "./Main.module.css";


const Main: FC<IMainProps> = ({ children }) => {
  return (
    <main className={styles.main}>
      
      {children}
    </main>
  );
};

export default Main;
