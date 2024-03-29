import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { newTechSchema } from "../../validations/newTechSchema";
import { useForm } from "react-hook-form";
import { iUserTechs, TechContext } from "../../context/TechContext";
import { Overlay, Container, Header, FormContainer, CloseIcon } from "./style";

const FormModal = () => {
  const { closeModal, registerTech } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserTechs>({
    resolver: yupResolver(newTechSchema),
  });
  

  return (
    <Overlay>
      <Container>
        <Header>
          <h3>Cadastrar Tecnologia</h3>
          <button onClick={closeModal}>
            <CloseIcon />
          </button>
        </Header>
        <FormContainer onSubmit ={handleSubmit(registerTech)}>
          <label htmlFor="title">Nome:</label>
          <input
            id="title"
            type="text"
            placeholder="Digite o nome da tecnologia"
            {...register("title")}
          />
          {errors.title && <p className="red"> {errors.title.message} </p>}

          <label htmlFor="status">Selecionar Status</label>
          <select id="status" {...register("status")}>
            <option value="iniciante">Iniciante</option>
            <option value="intermediario">Intermediário</option>
            <option value="avançado">Avançado</option>
          </select>
   
          <button type="submit">Cadastrar Tecnologia</button>
      
        </FormContainer>
      </Container>
    </Overlay>
  );
};

export default FormModal;
