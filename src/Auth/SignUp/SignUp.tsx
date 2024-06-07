import { FC, FormEvent } from "react";
import Button from "../../components/Button/Button";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import Ptag from "../../components/Ptag/Ptag";
import styles from "../signboard.module.css";
import { Link } from "react-router-dom";
import { routers } from "../../helpers/routers/routers";

const SignUp: FC = () => {
  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    const { email, name, password, copyPassword } = data;

    if (password !== copyPassword) {
      console.error("Пароли не совпадают.");
      return;
    }

    if (
      typeof email === "string" &&
      typeof password === "string" &&
      typeof name === "string"
    ) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          return updateProfile(userCredential.user, { displayName: name });
        })
        .then((user) => {
          console.log(user, "Профиль пользователя обновлен.");
        })
        .catch((error) => {
          console.error("Ошибка при регистрации:", error);
        });
    }
  };
  return (
    <div className={styles.form_container}>
      <form onSubmit={submitForm} className={styles.form}>
        <label htmlFor="email">
          <Ptag size="medium">Имаил</Ptag>
          <input type="email" name="email" id="email" placeholder="email" />
        </label>

        <label htmlFor="name">
          <Ptag size="medium">Имя</Ptag>
          <input type="text" name="name" id="name" placeholder="name" />
        </label>
        <label htmlFor="password">
          <Ptag size="medium">Пароль</Ptag>
          <input
            type="password"
            name="password"
            placeholder="password"
            id="password"
          />
        </label>
        <label htmlFor="copyPassword">
          <Ptag size="medium"> Повторите пароль</Ptag>
          <input
            type="password"
            name="copyPassword"
            id="copyPassword"
            placeholder="password"
          />
        </label>
        <div className={styles.buttons_block}>
          <Button>Зарегистрироваться</Button>

          <Link to={routers.login}>
            <Ptag size="small">Есть аккаунт?</Ptag>
            <span>Войти</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
