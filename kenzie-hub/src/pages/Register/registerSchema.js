import * as yup from 'yup';

export const registerSchema = yup
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
      .matches(/.{6,}/, 'Deve ter no minimo 6 digitos'),
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
      course_module: yup
      .string().required('Escolha um módulo')
    })
  .required();
