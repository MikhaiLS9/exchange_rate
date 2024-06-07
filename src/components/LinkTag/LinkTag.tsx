import { FC } from "react";
import { Link } from "react-router-dom";
import { ILinkTag } from "./LinkTag.props";
import cn from "classnames";
import styles from "./LinkTag.module.css";

const LinkTag: FC<ILinkTag> = ({ children, href, appearance, isActive }) => {
  return (
    <Link
      to={href}
      className={cn(styles.link, {
        [styles.button]: appearance === "button",
        [styles.buttonXl]: appearance === "buttonXl",
        [styles.ghost]: appearance === "ghost",
        [styles.ghostXl]: appearance === "ghostXl",
        [styles.isActive]: isActive,
      })}
    >
      {children}
    </Link>
  );
};

export default LinkTag;
