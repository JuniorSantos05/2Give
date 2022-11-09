import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../components/Button";
import { LoginForm } from "../../styles/LoginForm";
import "react-toastify/dist/ReactToastify.css";
import { GiveContextAuthorization, ILoginUser } from "../../contexts/GiveContextAuthorization";
import Logo from "../../assets/Logo.svg";
import { LinkBack, LinkLogin } from "../../components/Link/styles";
import { FlexContainer } from "../../styles/FlexContainer";
import { Input } from "../../components/Input";
import { formSchema } from "../../schema/schemLogin";


const Login = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginUser>({
    resolver: yupResolver(formSchema),
  });

  const navigate = useNavigate();
  const token = localStorage.getItem("@2Give:Token");

  const { loginUser } = useContext(GiveContextAuthorization);

  return (
    <>
      <LoginForm onSubmit={handleSubmit(loginUser)}>
        <header>
          <figure>
            <img src={Logo} alt="Logo 2Give" />
          </figure>
          <LinkBack to="landingPage">Voltar</LinkBack>
        </header>
        <FlexContainer
          display="flex"
          flexDirection="column"
          justifyContent="center">
          <h1>Login</h1>
          <FlexContainer media="responsive">
            <Input
              name="email"
              register={register}
              error={errors.email}
              label="E-mail"
              placeholder="e-mail"
            />
            <Input
              name="password"
              register={register}
              error={errors.password}
              label="Senha"
              placeholder="senha"
            />
          </FlexContainer>
          <FlexContainer
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center">
            <Button type="submit" btnStyle="btnPrimary">
              Login
            </Button>
            <span>Ainda não é cadastrado?</span>
            <LinkLogin to="register">Cadastrar</LinkLogin>
          </FlexContainer>
        </FlexContainer>
      </LoginForm>
    </>
  );
};

export default Login;
