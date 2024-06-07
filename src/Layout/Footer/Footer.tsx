import { FC } from "react";
import { IFooterProps } from "./Footer.props";
import styles from "./Footer.module.css";

const Footer: FC<IFooterProps> = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_item}>Политика конфиденциальности</div>
      <div
        className={styles.footer_item}
      >{`© ${currentYear}, Все права защищены`}</div>
      <div className={styles.footer_item}>Время</div>
    </footer>
  );
};

export default Footer;
