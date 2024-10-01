function InputSenha (props) {
    const regras = {
        required: {value: true, message: "Senha é obrigatória"},
        minLength: {value: 6, message: "A senha deve conter no mínimo 6 caracteres"}
    };

    return (
        <>
        <label htmlFor="senha">Senha</label>
        <input type="password" {...propos.register("senha", regras)}/>
        {props.error && <p>{props.error.message}</p>}
        </>
    );
}

export default InputSenha;