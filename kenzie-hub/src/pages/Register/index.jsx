import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import { registerSchema } from '../../validations/registerSchema';
import { Container } from '../../components/container/style';
import { Form } from '../../components/Form/style'
import Button from '../../components/Button';
import { UserContext } from '../../context/UserContext';

// const [newUser, setNewUser] = useState([]);


const Register = () => {
  const [loading , setLoading] = useState(false);
  const { userRegister } = useContext(UserContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async data => {
    userRegister(data, setLoading)
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
      {errors.name && <p className='red'> {errors.name.message} </p>}

      <label htmlFor='email'>E-mail</label>
      <input id='email ' type='email' placeholder='Digite seu e-mail' {...register('email')} />
      {errors.email && <p className='red'> {errors.email.message} </p>}

      <label htmlFor='password'>Senha</label>
      <input id='password' type='password' placeholder='Crie sua senha' {...register('password')} />
      {errors.password && <p className='red'> {errors.password.message} </p>} 
     
      <label htmlFor='confirmPassword'>Confirmar Senha</label>
      <input id='confirmPassword' type='password' placeholder='Confirme sua senha' {...register('confirmPassword')} />
      {errors.confirmPassword && <p className='red'> {errors.confirmPassword.message} </p>}
     
      <label htmlFor='bio'>Bio</label>
      <input id='bio' type='text' placeholder='Fale sobre você' {...register('bio')} />
      {errors.bio && <p className='red'> {errors.bio.message} </p>}
     
      <label htmlFor='contact'>Contato</label>
      <input id='contact' type='text' placeholder='Opção de contato' {...register('contact')} />
      {errors.contact && <p className='red'> {errors.contact.message} </p>}

      <label htmlFor='course_module'>Selecionar Módulo</label>
      <select id='course_module' {...register('course_module')}>
        <option value='Primeiro módulo (Introdução ao Frontend)'>Primeiro módulo (Introdução ao Frontend)</option>
        <option value='Segundo módulo (Frontend Avançado)'>Segundo módulo (Frontend Avançado)</option>
        <option value='Terceiro módulo (Introdução ao Backend)'>Terceiro módulo (Introdução ao Backend)</option>
        <option value='Quarto módulo (Backend Avançado'>Quarto módulo (Backend Avançado</option>
      </select>
      {errors.course_module && <p className='red'>{errors.course_module.message}</p>}

      <Button variant='primary' type='submit' disabled={loading}>{loading ? 'Cadastrando...' : 'Cadastrar'}</Button>

    </Form>
</Container>

  );
};

export default Register;
  