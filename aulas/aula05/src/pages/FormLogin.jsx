import { useState } from "react";
import Botao from "../components/Botao";
import InputEmail from "../components/InputEmail";
import InputSenha from "../components/InputSenha";

function FormLogin(props) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const aoClicar = (e) => {
    e.preventDefault();
    props.navegaPara("/home");
    // aqui seria feito o chamado ao BackEnd;
  };

  return (
    <>
      <InputEmail valor={email} mudaValor={setEmail} />
      <InputSenha valor={senha} mudaValor={setSenha} />
      <Botao texto="Não Clique" aoClicar={aoClicar} />
    </>
  );
}

export default FormLogin;
