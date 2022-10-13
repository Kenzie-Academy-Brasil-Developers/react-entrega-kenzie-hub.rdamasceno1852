import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';
import { Form } from '../../components/Form/style'
import { Container } from '../../components/container/style';
import Button from '../../components/Button';
import loginSchema from '../../validations/loginSchema';
import api from '../../services/api';
import { toast } from 'react-toastify'
import { useState } from 'react';


const Login = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
      console.log(data)
      try {
        setLoading(true)
        const response = await api.post('/sessions', data);
        toast.success('login feito com sucesso!')
        localStorage.setItem('@Kenzie_Hub_token', response.data.token)
        localStorage.setItem('@Kenzie_Hub_id', response.data.user.id)

        navigate('/dashboard')

        return response
      } 
      catch (error) {
        console.log(error.response.data.message)
        toast.error('Dados incorretos')
      }
      finally{
        setLoading(false)
      }
    };

  return (
    <Container>
      
       <h2>Kenzie Hub</h2>
      
      
      <Form onSubmit={handleSubmit(onSubmit)}>
      <h3>Login</h3>

      <label htmlFor='email'>email</label>
      <input id='email ' type='email' placeholder='E-mail' {...register('email')} />
      {errors.email && <p> {errors.email.message} </p>}

      <label htmlFor='password'>senha</label>
      <input id='password' type='password' placeholder='Senha' {...register('password')} />
      {errors.password && <p> {errors.password.message} </p>}

      <Button variant='primary' type='submit' disabled={loading}> {loading ? 'Aguarde...' : 'Login' }</Button>

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
