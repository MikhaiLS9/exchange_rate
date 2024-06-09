import { FC } from "react";

import styles from "./Button.module.css";
import cn from "classnames";
import { IButtonProps } from "./Button.props";


const Button: FC<IButtonProps> = ({
  children,
  appearance,
  ...arg
}) => {
  return (
    <button
      className={cn(styles.button, {
        [styles.small]: appearance === "small",
        [styles.medium]: appearance === "medium",
        [styles.large]: appearance === "large",
      })}
      {...arg}
    >
      {children}
     
    </button>
  );
};

export default Button;
