import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { newTechSchema } from "../../validations/newTechSchema";
import { useForm } from "react-hook-form";
import { TechContext } from "../../context/TechContext";
import { Overlay, Container, Header, FormContainer, CloseIcon } from "./style";

const FormModal = () => {
  const { closeModal, registerTech } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
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
        <FormContainer onClick={handleSubmit(registerTech)}>
          <label htmlFor="title">Nome:</label>
          <input
            id="title"
            type="text"
            placeholder="Digite o nome da tecnologia"
            {...register("title")}
          />
          {errors.title && <p className="red"> {errors.title.message} </p>}

          <label htmlFor="status">Selecionar Stauts</label>
          <select id="status" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediario">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <button type="submit">Cadastrar Tecnologia</button>
        </FormContainer>
      </Container>
    </Overlay>
  );
};

export default FormModal;
