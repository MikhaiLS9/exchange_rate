import { Link } from "react-router-dom";
import { routers } from "../../helpers/routers/routers";
import Ptag from "../Ptag/Ptag";
import { memo } from "react";
import styles from "./LinkToConvert.module.css";

const LinkConvert = () => {
  return (
    <Link to={routers.convert} className={styles.link}>
      <Ptag size="medium">Для количества перейдите по ссылки</Ptag>
    </Link>
  );
};

const LinkToConvert = memo(LinkConvert);

export default LinkToConvert;
