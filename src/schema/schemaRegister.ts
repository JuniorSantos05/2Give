import * as yup from "yup";

export const formSchema = yup.object().shape({
  username: yup.string().required("Nome obrigatório!"),
  email: yup.string().required("Email obrigatório!").email("Email inválido!"),
  password: yup
    .string()
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/[a-z]/, "Deve conter ao menos 1 letra minúscula")
    .matches(/(\d)/, "Deve conter ao menos 1 número")
    .matches(/(\W)|_/, "Deve conter ao menos 1 caracter especial")
    .matches(/.{8,}/, "Deve conter no mínimo 8 dígitos")
    .required("Senha é obrigatória"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Confirmação de senha nescessário!"),
});