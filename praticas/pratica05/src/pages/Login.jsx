import Rodape from "../components/Rodape";
import Conteudo from "../components/Conteudo";
import Link from "../components/Link";
import Titulo from "../components/Titulo"
import Botao from "../components/Botao"
import Icone from "../components/Icone"
import InputEmail from "../components/InputEmail"
import InputSenha from "../componentes/InputSenha"


function Login() {
    return(
        <>
        <Conteudo>
            <Icone imagem="" texto="Logo da Aplicação" />
            <Titulo texto="Aluno Online" />
            <InputEmail />
            <InputSenha />
            <Botao texto="Entrar" />
            <Link texto="Esqueceu a Senha?" />
        </Conteudo>
        <Rodape texto="Copyright (C) 2024" />
        </>
    );
}

export default Login();
