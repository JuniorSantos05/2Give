import { useContext } from "react";
import { GiveContext } from "../../contexts/GiveContext";
import { StyleModalCampaign } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const ModalCampaign = () => {
  const { setCloseModal } = useContext(GiveContext);

  const formSchemaCampaign = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    urlImage: yup.string().required("Campo Obrigatório"),
    target_public: yup.string().required("Campo Obrigatório"),
    location: yup.string().required("Campo Obrigatório"),
    timeEvent: yup.string().required("Campo Obrigatório"),
    phone: yup.string().required("Campo Obrigatório"),
    description: yup.string().required("Campo Obrigatório"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchemaCampaign),
  });

  return (
    <StyleModalCampaign>
      <form onSubmit={handleSubmit("")}>
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
        </label>

        <label htmlFor="urlImage">
          Url da Imagem
          <input
            type="text"
            placeholder="Cole aqui a Url da imagem da campanha"
            {...register("urlImage")}
          />
        </label>

        <label htmlFor="target_public">
          Publico Alvo
          <input
            type="text"
            placeholder="Digite para qual público essa ação será destinada"
            {...register("target_public")}
          />
        </label>
        <label htmlFor="location">
          Localização
          <input
            type="text"
            placeholder="Digite onde será realizado o evento."
            {...register("location")}
          />
        </label>
        <div>
          <label htmlFor="timeEvent">
            Horário
            <input type="datetime-local" {...register("timeEvent")} />
          </label>

          <label htmlFor="phone">
            Telefone
            <input
              type="text"
              placeholder="(xx)9xxxx-xxxx"
              {...register("phone")}
            />
          </label>
        </div>
        <label htmlFor="description">
          Texto
          <textarea {...register("description")}></textarea>
        </label>

        <button type="submit">Publicar</button>
      </form>
    </StyleModalCampaign>
  );
};
