import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// import { Form } from '../../components/Form'

const schema = yup
  .object({
    email: yup
      .string()
      .required('Email é obrigatório')
      .email('Deve ser um e-mail válido'),
    password: yup
      .string()
      .required('Senha é obrigatória')
      .matches(/[A-Z]/, 'Deve conter ao menos 1 letra maiúscula')
      .matches(/[a-z]/, 'Deve conter ao menos 1 letra minuscula')
      .matches(/(\d)/, 'Deve conter ao menos um número')
      .matches(/(\W)|_/, 'Deve conter um caracter especial')
      .matches(/.{8,}/, 'Deve ter no minimo 8 digitos'),
  })
  .required();

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='email'>email</label>
      <input id='email ' type='email' {...register('email')} />
      <p>{errors.email?.message}</p>

      <label htmlFor='password'>senha</label>
      <input id='password' type='password' {...register('password')} />
      <p>{errors.password?.message}</p>

      <button type='submit'>cadastrar</button>
    </form>
  );
};

export default Login;
