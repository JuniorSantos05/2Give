import { useContext } from "react";
import {
  GiveContextUserPage,
  IProjects,
} from "../../contexts/GiveContextUserPage";
import { StyleModalCampaign } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { GiveContextAuthorization } from "../../contexts/GiveContextAuthorization";

export const ModalCampaign = () => {
  const { setCloseModal, createProjects } = useContext(GiveContextUserPage);
  const { user } = useContext(GiveContextAuthorization);

  const formSchemaCampaign = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    image: yup.string().required("Campo Obrigatório"),
    donation: yup.string().required("Campo Obrigatório"),
    address: yup.string().required("Campo Obrigatório"),
    account: yup.string().required("Campo Obrigatório"),
    description: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProjects>({
    resolver: yupResolver(formSchemaCampaign),
  });

  function sendId(data: IProjects) {
    data.userId = Number(user?.id);
    createProjects(data);
  }

  return (
    <StyleModalCampaign>
      <form onSubmit={handleSubmit(sendId)}>

        <div>
          <h2>Criar Campanha</h2>
          <p onClick={() => setCloseModal(false)}>X</p>
        </div>
        <label htmlFor="name">
          Nome da Campanha
          <input
            type="text"
            placeholder="Digite o título da campanha"
            {...register("name")}
          />
          {errors.name && <h6>{errors.name.message}</h6>}
        </label>

        <label htmlFor="image">
          Url da Imagem
          <input
            type="text"
            placeholder="Cole aqui a Url da imagem da campanha"
            {...register("image")}
          />
          {errors.image && <h6>{errors.image.message}</h6>}
        </label>

        <label htmlFor="donation">
          Selecione qual tipo de doação essa campanha irá receber
          <select name="donation">
            <option value="Selecionar" selected>
              Selecionar
            </option>
            <option value="Alimentos" {...register("donation")}>
              Alimentos
            </option>
            <option value="Água Mineral" {...register("donation")}>
              Água Mineral
            </option>
            <option value="Brinquedos" {...register("donation")}>
              Brinquedos
            </option>
            <option value="Cobertores e Agasalhos" {...register("donation")}>
              Cobertores e Agasalhos
            </option>
            <option value="Fraldas" {...register("donation")}>
              Fraldas
            </option>
            <option
              value="Material de Higiene Pessoal"
              {...register("donation")}
            >
              Material de Higiene Pessoal
            </option>
            <option value="Ração" {...register("donation")}>
              Ração
            </option>
            {errors.donation && <h6>{errors.donation.message}</h6>}
          </select>
        </label>
        <label htmlFor="address">
          Localização
          <input
            type="text"
            placeholder="Digite onde será realizado o evento."
            {...register("address")}
          />
          {errors.address && <h6>{errors.address.message}</h6>}
        </label>

        <label htmlFor="account">
          Contato para Doação
          <input
            type="text"
            placeholder="Contato para doação"
            {...register("account")}
          />
          {errors.account && <h6>{errors.account.message}</h6>}
        </label>
        <label htmlFor="description">
          Descrição da Campanha
          <textarea {...register("description")}></textarea>
          {errors.description && <h6>{errors.description.message}</h6>}
        </label>

        <button type="submit">Publicar</button>
      </form>
    </StyleModalCampaign>
  );
};
