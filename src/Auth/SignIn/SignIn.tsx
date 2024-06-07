import { FC, FormEvent } from "react";
import Button from "../../components/Button/Button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { routers } from "../../helpers/routers/routers";

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
    <div>
      <form onSubmit={submitForm}>
        <label htmlFor="emailIn">
          Имаил
          <input type="email" name="emailIn" id="emailIn" placeholder="email" />
        </label>

        <label htmlFor="passwordIn">
          Пароль
          <input
            type="password"
            name="passwordIn"
            placeholder="passwordIn"
            id="passwordIn"
          />
        </label>

        <Button>Войти</Button>
      </form>
    </div>
  );
};

export default SignIn;
