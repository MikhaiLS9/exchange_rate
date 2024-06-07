import { FC, FormEvent } from "react";
import Button from "../../components/Button/Button";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";

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
    <form onSubmit={submitForm}>
      <label htmlFor="email">
        Имаил
        <input type="email" name="email" id="email" placeholder="email" />
      </label>

      <label htmlFor="name">
        Имя
        <input type="text" name="name" id="name" placeholder="name" />
      </label>
      <label htmlFor="password">
        Пароль
        <input
          type="password"
          name="password"
          placeholder="password"
          id="password"
        />
      </label>
      <label htmlFor="copyPassword">
        Повторите пароль
        <input
          type="password"
          name="copyPassword"
          id="copyPassword"
          placeholder="password"
        />
      </label>
      <Button>Зарегистрироваться</Button>
    </form>
  );
};

export default SignUp;
