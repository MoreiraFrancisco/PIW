const Filho = ({falarComPai}) => {

    const acaoBotao = () => {
        falarComPai("Oi Pai!")
    }


    return (
        <div>
            <h1>
                Filho
            </h1>
            <button onClick={acaoBotao}>
                Enviar mensagem pro pai
            </button>
        </div>
    )
}

export default Filho