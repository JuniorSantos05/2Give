import Logo from "../../assets/Logo.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterForm } from "../../styles/RegisterForm";
import { schemaRegister } from "./validation";
import { FlexContainer } from "../../styles/FlexContainer";
import { Link } from "react-router-dom";
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

  const dataRegister = (data: IRegisterForm) => {
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
            <div>
              <Input
                register={register}
                error={errors.username}
                label="Nome"
                name="username"
                placeholder="Digite seu nome"
              />

              <Input
                register={register}
                error={errors.email}
                label="Email"
                name="email"
                placeholder="Digite seu email"
              />

              <Input
                register={register}
                error={errors.password}
                label="Senha"
                name="password"
                placeholder="Digite sua senha"
              />
            </div>

            <div>
              <Input
                register={register}
                error={errors.password}
                label="Confirmar senha"
                name="password"
                placeholder="Digite sua senha"
              />

              <Input
                register={register}
                error={errors.confirmPassword}
                label="Confirmar senha"
                name="password"
                placeholder="Confirme sua senha"
              />

              <Input
                register={register}
                error={errors.imagem}
                label="Imagem de perfil"
                name="imagem"
                placeholder="Adicione uma URL"
              />
            </div>
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
