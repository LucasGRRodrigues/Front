import Icone from './Icone';
import Titulo from './Titulo';
import InputPesquisa from './InputPesquisa';


function Cabecalho() {
    return(
        <header>
            <div>
                <Icone imagem="" texto="Logo da Aplicação" />
                <Titulo texto="Aluno Online" />
            </div>
            <div>
                <InputPesquisa />
                <Icone imagem="" texto="Icone Pesquisa" />
            </div>
        </header>
    );
}

export default Cabecalho;