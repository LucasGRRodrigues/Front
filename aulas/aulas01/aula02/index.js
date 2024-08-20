const root = document.getElementById("root");

// COMPONENTE
function Cabecalho() {
    const header = document.createElement("header");
    return header;
}

function Conteudo() {
    const main = document.createElement("main");
    return main;
}

function Rodape() {
    const footer = document.createElement("footer");
    return footer;
}

// PAGINAS
function PageLogin() {
    const Conteudo = Conteudo();
    const rodape = Rodape();
    root.append(conteudo, rodape);
}

function PageHome() {
    const cabecalho = Cabecalho();
    const conteudo = Conteudo();
    root.append(cabecalho, conteudo);
}


PageLogin();

