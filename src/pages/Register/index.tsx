import Logo from "../../assets/Logo.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterForm } from "../../styles/RegisterForm";
import { formSchema } from "../../schema/schemaRegister";
import { FlexContainer } from "../../styles/FlexContainer";
import { Button } from "../../components/Button";
import { LinkBack, LinkLogin } from "../../components/Link/styles";
import { Input } from "../../components/Input";
import {
  GiveContextAuthorization,
  IRegisterForm,
} from "../../contexts/GiveContextAuthorization";
import { useContext } from "react";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterForm>({
    resolver: yupResolver(formSchema),
  });

  const { registerUser } = useContext(GiveContextAuthorization);

  return (
    <>
      <RegisterForm onSubmit={handleSubmit(registerUser)}>
        <header>
          <figure>
            <img src={Logo} alt="logo" />
          </figure>
          <LinkBack to="/login">Voltar</LinkBack>
        </header>

        <FlexContainer flexDirection="column" media="responsive">
          <h1>Cadastrar</h1>
          <Input
            type="text"
            register={register}
            error={errors.username}
            label="Nome"
            name="username"
            placeholder="Digite seu nome"
          />

          <Input
            type="email"
            register={register}
            error={errors.email}
            label="Email"
            name="email"
            placeholder="Digite seu email"
          />

          <Input
            type="password"
            register={register}
            error={errors.password}
            label="Senha"
            name="password"
            placeholder="Digite sua senha"
          />

          <Input
            type="password"
            register={register}
            error={errors.confirmPassword}
            label="Confirmar senha"
            name="confirmPassword"
            placeholder="Digite sua senha"
          />

          <Input
            type="text"
            register={register}
            error={errors.imagem}
            label="Imagem de perfil"
            name="imagem"
            placeholder="Adicione uma URL"
          />

          <FlexContainer
            display="flex"
            flexDirection="column"
            alignItems="center">
            <Button type="submit" btnStyle="btnPrimary">
              Registrar
            </Button>

            <span>Já é cadastrado?</span>

            <LinkLogin to="/login">Logar</LinkLogin>
          </FlexContainer>
        </FlexContainer>
      </RegisterForm>
    </>
  );
};

export default Register;
