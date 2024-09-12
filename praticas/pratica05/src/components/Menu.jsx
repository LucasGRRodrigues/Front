import Link from './Link';

function Menu() {
    opcoes = ["Home", "Perfil", "Sair"]
    return(
        <nav>
            <ul>
                {opcoes.map((opcao) => <li><Link texto={opcao}/></li>)}
            </ul>
        </nav>
    );
}

export default Menu;
