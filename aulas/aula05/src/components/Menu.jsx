function Menu(props) {
  const opcoes = [
    { rota: "/home", texto: "Home" },
    { rota: "/perfil", texto: "Perfil" },
    { rota: "/login", texto: "Sair" },
  ];

  const aoClicar = (e) => {
    e.preventDefault();
    const rota = e.target.getAttribute("href");
    props.navegaPara(rota);
  }
  return (
    <nav>
      <lu>
        {opcoes.map((opcao, index) => (
          <li key={index}>
            <a href={opcao.rota} onClick={aoClicar}>{opcao.texto}</a>
          </li>
        ))}
      </lu>
    </nav>
  );
}

export default Menu;
