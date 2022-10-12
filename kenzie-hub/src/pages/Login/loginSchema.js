import * as yup from 'yup';


const loginSchema = yup
  .object({
    email: yup
      .string()
      .required('Email é obrigatório'),
    password: yup
      .string()
      .required('Senha é obrigatória')
     
  })
  .required();

  export default loginSchema