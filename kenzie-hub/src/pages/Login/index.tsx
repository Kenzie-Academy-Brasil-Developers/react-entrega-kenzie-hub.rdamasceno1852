import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { Form } from "../../components/Form/style";
import { Container } from "../../components/container/style";
import Button from "../../components/Button";
import loginSchema from "../../validations/loginSchema";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";

export interface iLoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const { userLogin } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginForm>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: iLoginForm) => {
    setLoading(true)
    userLogin(data);
  };

  return (
    <Container>
      <h2>Kenzie Hub</h2>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <h3>Login</h3>

        <label htmlFor="email">email</label>
        <input
          id="email "
          type="email"
          placeholder="E-mail"
          {...register("email")}
        />
        {errors.email && <p className="red"> {errors.email.message} </p>}

        <label htmlFor="password">senha</label>
        <input
          id="password"
          type="password"
          placeholder="Senha"
          {...register("password")}
        />
        {errors.password && <p className="red"> {errors.password.message} </p>}

        <Button variant="primary" type="submit" disabled={loading}>
          {" "}
          {loading ? "Aguarde..." : "Login"}
        </Button>

        <Link to="/register">Ainda não possui uma conta?</Link>

        <Link to="/register" className="btn">
          Cadastrar
        </Link>
      </Form>
    </Container>
  );
};

export default Login;
