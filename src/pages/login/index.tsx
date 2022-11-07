import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm , SubmitHandler} from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../styles/button";
import { Flex } from "../../styles/flex";
import { Input, H3, H4, Label, H5 } from "../../styles/card";
import 'react-toastify/dist/ReactToastify.css';
import { Card, Text } from "@nextui-org/react";
import { ILoginUser } from "../../contexts/GiveContext";
import { GiveContext } from "../../contexts/GiveContext";

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
      <Card>
        <Flex>
          <form onSubmit={handleSubmit(loginUser)}>
            <div>
              <Flex>
                <H3>Login</H3>
              </Flex>
              <H5>E-mail</H5>
              <Input
                id="email"
                type="email"
                placeholder="e-mail"
                {...register("email")}
              />
              <H4>{errors.email?.message}</H4>
            </div>
            <div>
              <H5>Senha</H5>
              <Input
                id="password"
                placeholder="senha"
                {...register("password")}
              />
              <H4>{errors.password?.message}</H4>
            </div>
            <Button backgroundColor={true} small={false} type="submit">Entrar</Button>
            <Flex>
            <Label>Ainda não é cadastrado?</Label>
            </Flex>
            <Button backgroundColor={false} small={false}   onClick={() => navigate(`/register`)}>Registrar</Button>
            {/*navigate(`/register, {replace: true}`)*/}
          </form>
        </Flex>
      </Card>
    );
  };
  
  export default Login;