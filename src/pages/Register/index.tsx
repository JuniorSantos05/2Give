import Logo from "../../assets/Logo.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterForm } from "../../styles/RegisterForm";
import { schemaRegister } from "./validation";
import { FlexContainer } from "../../styles/FlexContainer";
import { Button } from "../../components/Button";
import { LinkBack, LinkLogin } from "../../components/Link/styles";
import { Input } from "../../components/Input";

export interface IRegisterForm {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  imagem: string;
}

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterForm>({
    resolver: yupResolver(schemaRegister),
  });

  const dataRegister = (data: IRegisterForm): any => {
    console.log("oi");
    console.log(data);
  };

  return (
    <>
      <RegisterForm onSubmit={handleSubmit(dataRegister)}>
        <header>
          <figure>
            <img src={Logo} alt="Logo 2Give" />
          </figure>
          <LinkBack to="register">Voltar</LinkBack>
        </header>
        <FlexContainer
          display="flex"
          flexDirection="column"
          justifyContent="center">
          <h1>Cadastrar</h1>

          <FlexContainer media="responsive">
            <Input
              type="text"
              register={register}
              error={errors.username}
              label="Nome"
              id="username"
              placeholder="Digite seu nome"
            />

            <Input
              type="email"
              register={register}
              error={errors.email}
              label="Email"
              id="email"
              placeholder="Digite seu email"
            />

            <Input
              type="password"
              register={register}
              error={errors.password}
              label="Senha"
              id="password"
              placeholder="Digite sua senha"
            />

            <Input
              type="password"
              register={register}
              error={errors.confirmPassword}
              label="Confirmar senha"
              id="confirmPassword"
              placeholder="Digite sua senha"
            />

            <Input
              type="text"
              register={register}
              error={errors.imagem}
              label="Imagem de perfil"
              id="imagem"
              placeholder="Adicione uma URL"
            />
          </FlexContainer>

          <FlexContainer
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center">
            <Button type="submit" btnStyle="btnPrimary">
              Registrar
            </Button>

            <span>Já é cadastrado?</span>

            <LinkLogin to="logar">Logar</LinkLogin>
          </FlexContainer>
        </FlexContainer>
      </RegisterForm>
    </>
  );
};

export default Register;
