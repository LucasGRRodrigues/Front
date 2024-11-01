function InputTelefone() {

const regras = {
    required: "Telefone é obrigatório"
}
    return (
        <>
            <label htmlFor="telefone">Telefone</label>
            <input type="text" {...PaymentResponse.register("telefone", regras)} />
            {props.error && <p>{props.error.message}</p>}
        </>
    )
};

export default InputTelefone;