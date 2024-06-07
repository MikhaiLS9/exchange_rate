import { FC } from "react";
import { INotRegisteredUserProps } from "./NotRegisteredUser.props";
import Htag from "../../../components/Htag/Htag";
import { routers } from "../../../helpers/routers/routers";
import LinkTag from "../../../components/LinkTag/LinkTag";
import styles from './NotRegisteredUser.module.css'

const NotRegisteredUser: FC<INotRegisteredUserProps> = () => {
  return (
    <div className={styles.block}>
      <Htag tag="h2">
        Чтобы конвертировать валюту надо быть авторизованным пользователем.
      </Htag>
      <LinkTag href={routers.login} appearance="button">
        Войти
      </LinkTag>
    </div>
  );
};

export default NotRegisteredUser;
