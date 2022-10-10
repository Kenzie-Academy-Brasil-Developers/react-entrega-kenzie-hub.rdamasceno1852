import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import { Form } from '../../components/Form/style'
import { Container } from '../../components/container/style';
import Button from '../../components/Button';

const schema = yup
  .object({
    email: yup
      .string()
      .required('Email é obrigatório'),
    password: yup
      .string()
      .required('Senha é obrigatória')
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
    <Container>
      
       <h2>Kenzie Hub</h2>
      
      
      <Form onSubmit={handleSubmit(onSubmit)}>
      <h3>Login</h3>

      <label htmlFor='email'>email</label>
      <input id='email ' type='email' placeholder='Digite seu e-mail' {...register('email')} />
      <p>{errors.email?.message}</p>

      <label htmlFor='password'>senha</label>
      <input id='password' type='password' placeholder='********' {...register('password')} />
      <p>{errors.password?.message}</p>

      <Button variant='primary' type='submit'>Entrar</Button>

      <Link to= '/register'>Ainda não possui uma conta?</Link>

      <Link 
        to= '/register' 
        className='btn' 
      >
        Cadastrar
      </Link>
      </Form>
    </Container>
  );
};

export default Login;
