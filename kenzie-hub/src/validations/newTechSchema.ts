import * as yup from 'yup';

export const newTechSchema = yup
.object({
    title: yup.string().required('Digite o nome da tecnologia'),
    status: yup.string().required('Escolha um nível')
})