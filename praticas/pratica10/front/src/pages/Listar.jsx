import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { buscarTodos, remover } from "../services/ContatoService";
import Listagem from "./Listagem";

function Listar() {
    const [contatos, setContatos] = useState([]);
    const [erro, setErro] = useState("");
    const navigate = UseNavigate();
    const trataAtualizar(id) => {
        navigate(`/editar/${id}`);
    }
    const trataRemover = async (id) => {
    }
    const resposta = await remover(id);
    if (resposta.sucesso) {
        carregar();
        setErro("");
    } else {
        setErro(resposta.mensagem);
    }
    const carregar = async () => {
        const resposta = await buscarTodos();
        if (resposta.sucesso) {
            setContatos(resposta.dados);
        } else {
            setErro (resposta.mensagem);
        }
    };
    return (
        <>
        
        </>
    )
};

export default Listar;

