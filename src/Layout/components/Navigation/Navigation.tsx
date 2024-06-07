import { FC } from "react";
import { INavigationProps } from "./Navigation.props";
import { links } from "./const/links";
import styles from './Navigation.module.css'
import LinkTag from "../../../components/LinkTag/LinkTag";

const Navigation: FC<INavigationProps> = () => {
  return (
    <nav className={styles.navigation_wrapper}>
      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link.id}>
            <LinkTag appearance="ghost" href={link.href}>{link.name}</LinkTag>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
