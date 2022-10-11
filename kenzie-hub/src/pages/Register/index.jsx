import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, Navigate } from 'react-router-dom';
import { Form } from '../../components/Form/style'
import Button from '../../components/Button';
import { Container } from '../../components/container/style';
import api from '../../services/api';
import { registerSchema } from './registerSchema';
import { toast } from 'react-toastify'

// const [newUser, setNewUser] = useState([]);

const Register = () => {
  const [loading , setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async data => {
    console.log(data)
    try{
      setLoading(true)
      const response = await api.post('users', data);    
      toast.success('Conta criada com sucesso!');
      console.log(response.data)
      return response.data
    }
    catch (err) {
      toast.error('Ops algo deu errado')
      console.log(err)
    }
    finally{
      setLoading(false)
    }
  };

  
  
  return (
<Container> 
    <div>
    <h2>Kenzie Hub</h2>
    <Link to='/' className='backBtn'> Voltar</Link>
    </div>

    <Form onSubmit={handleSubmit(onSubmit)}>


      <h3>Crie sua conta</h3>

      <span> Rapido e grátis, vamos nessa</span>

      <label htmlFor='name'>Nome</label>
      <input id='name ' type='name' placeholder='Digite seu e-mail' {...register('name')} />
      <p>{errors.name?.message}</p>

      <label htmlFor='email'>E-mail</label>
      <input id='email ' type='email' placeholder='Digite seu e-mail' {...register('email')} />
      <p>{errors.email?.message}</p>

      <label htmlFor='password'>Senha</label>
      <input id='password' type='password' placeholder='Crie sua senha' {...register('password')} />
      <p>{errors.password?.message}</p>
     
      <label htmlFor='confirm password'>Confirmar Senha</label>
      <input id='confirm password' type='password' placeholder='Confirme sua senha' {...register('confirm password')} />
      <p>{errors.password?.message}</p>
     
      <label htmlFor='bio'>Bio</label>
      <input id='bio' type='text' placeholder='Fale sobre você' {...register('bio')} />
      <p>{errors.bio?.message}</p>
     
      <label htmlFor='contact'>Contato</label>
      <input id='contact' type='text' placeholder='Opção de contato' {...register('contact')} />
      <p>{errors.contact?.message}</p>

      <label htmlFor='course_module'>Selecionar Módulo</label>
      <select id='course_module' {...register('course_module')}>
        <option value='Primeiro módulo (Introdução ao Frontend)'>Primeiro módulo (Introdução ao Frontend)</option>
        <option value='Segundo módulo (Frontend Avançado)'>Segundo módulo (Frontend Avançado)</option>
        <option value='Terceiro módulo (Introdução ao Backend)'>Terceiro módulo (Introdução ao Backend)</option>
        <option value='Quarto módulo (Backend Avançado'>Quarto módulo (Backend Avançado</option>
      </select>
      <p>{errors.course_module?.message}</p>

      <Button variant='primary' type='submit' disabled={loading}>{loading ? 'Cadastrando...' : 'Cadastrar'}</Button>

    </Form>
</Container>

  );
};

export default Register;
