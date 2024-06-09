import { FC, FormEvent } from "react";
import Button from "../../components/Button/Button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
import { routers } from "../../helpers/routers/routers";
import styles from "../signboard.module.css"; // Убедитесь, что путь к стилям верный
import Ptag from "../../components/Ptag/Ptag";

const SignIn: FC = () => {
  const navigate = useNavigate();
  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    const { emailIn, passwordIn } = data;

    // signInWithCustomToken(auth : )
    if (typeof emailIn === "string" && typeof passwordIn === "string")
      signInWithEmailAndPassword(auth, emailIn, passwordIn)
        .then((user) => {
          console.log(user);
          navigate(routers.home);
        })
        .catch((error) => console.error(error));
  };

  return (
    <div className={styles.form_container}>
      <form onSubmit={submitForm} className={styles.form}>
        <label htmlFor="emailIn">
          <Ptag size="medium">Имайл</Ptag>
          <input type="email" name="emailIn" id="emailIn" placeholder="email" />
        </label>

        <label htmlFor="passwordIn">
          <Ptag size="medium">Пароль</Ptag>
          <input
            type="password"
            name="passwordIn"
            placeholder="password"
            id="passwordIn"
          />
        </label>

        <div className={styles.buttons_block}>
          <Button appearance="medium">Войти</Button>
          <Link to={routers.register}>
            <Ptag size="small">Нет аккаунта? </Ptag>
            <span>зарегистрируйся</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
