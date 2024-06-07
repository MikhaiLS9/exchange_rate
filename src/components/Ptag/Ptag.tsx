import { FC } from "react";
import { IPtagProps } from "./Ptag.props";
import styles from "./Ptag.module.css";
import cn from "classnames";

const Ptag: FC<IPtagProps> = ({
  children,
  size,
  isError,
  isSuccess,
  ...props
}) => {
  return (
    <p
      className={cn(styles.p, {
        [styles.small]: size === "small",
        [styles.medium]: size === "medium",
        [styles.large]: size === "large",
        [styles.isError]: isError,
        [styles.isSuccess]: isSuccess,
      })}
      {...props}
    >
      {children}
    </p>
  );
};

export default Ptag;
