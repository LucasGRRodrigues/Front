import Botao from '../components/Botao';
import Conteudo from '../components/Conteudo';
import InputEmail from '../components/InputEmail';
import InputSenha from '../components/InputSenha';
import Link from '../components/Link';
import Logo from '../components/Logo';
import Rodape from '../components/Rodape'
import Titulo from '../components/Titulo';

function Login() {
    return (
        <>
            <Conteudo>
                <Logo imagem="https://www.svgrepo.com/show/325799/student-graduation-dance.svg" texto="Logo da Aplicação" />
                <Titulo texto= "Aluno Online"/>
                <InputEmail />
                <InputSenha />
                <Botao texto="Entrar" />
                <Link texto="Esqueceu a Senha?"/>
            </Conteudo>
            <Rodape />
        </>
    );
}

export default Login;