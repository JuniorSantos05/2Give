import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm , SubmitHandler} from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../components/Button";
import { LoginForm } from "../../styles/LoginForm";
import { Flex } from "../../styles/flex";
import { H3, H4, Label, H5 } from "../../styles/card";
import 'react-toastify/dist/ReactToastify.css';
import { Card, Text } from "@nextui-org/react";
import { ILoginUser } from "../../contexts/GiveContext";
import { GiveContext } from "../../contexts/GiveContext";
import Logo from "../../assets/Logo.svg";
import { LinkBack, LinkLogin } from "../../components/Link/styles";
import { FlexContainer } from "../../styles/FlexContainer";
import { Input } from "../../components/Input";

const Login = () => {
    const formSchema = yup.object().shape({
      email: yup
        .string()
        .required("E-mail obrigatório")
        .email("Insira um e-mail válido."),
      password: yup.string().required("Senha obrigatória"),
    });
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<ILoginUser>({
      resolver: yupResolver(formSchema),
    });
  
    const navigate = useNavigate();
    const token = localStorage.getItem("@2Give:Token");
  
    type FormValues = {
      email: string;
      password: string;
    };
  
    const {loginUser} = useContext(GiveContext);
    
    return (
      <>
        <Flex>
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
                register={register}
                error={errors.email}
                label="E-mail"
                placeholder="e-mail"
                {...register("email")}
              />
               <Input
                register={register}
                error={errors.password}
                label="Senha"
                placeholder="senha"
                {...register("password")}
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
        </Flex>
      </>
    );
  };
  
  export default Login;