import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import { Form } from '../../components/Form/style'
import Button from '../../components/Button';
import { Container } from '../../components/container/style';

const schema = yup
  .object({
    name: yup
        .string().required('Nome obrigátório'),
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
      confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref('password')],
        'Confirmação de senha deve ser igual a senha'
      ),
      bio: yup
      .string().required('Campo obrigatório'),
      contact: yup
      .string().required('Contato obrigatório'),
      module: yup
      .string().required('Escolha um módulo')
    })
  .required();

const Register = () => {
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
      <input id='confirm password' type='password' placeholder='Confirme sua senha' {...register('password')} />
      <p>{errors.password?.message}</p>
     
      <label htmlFor='bio'>Bio</label>
      <input id='bio' type='text' placeholder='Fale sobre você' {...register('bio')} />
      <p>{errors.bio?.message}</p>
     
      <label htmlFor='contact'>Contato</label>
      <input id='contact' type='text' placeholder='Opção de contato' {...register('contact')} />
      <p>{errors.contact?.message}</p>

      <label htmlFor='module'>Selecionar Módulo</label>
      <select id='module' {...register('module')}>
        <option value='m1'>M1</option>
        <option value='m2'>M2</option>
        <option value='m3'>M3</option>
        <option value='m4'>M4</option>
        <option value='m5'>M5</option>
        <option value='m6'>M6</option>
      </select>
      <p>{errors.module?.message}</p>

      <Button variant='primary' type='submit'>Cadastrar</Button>

    </Form>
</Container>

  );
};

export default Register;
