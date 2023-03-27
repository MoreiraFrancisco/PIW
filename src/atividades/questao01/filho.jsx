
let Filho = ({peso, altura}) => {
    
    const calculaImc = ({peso, altura}) => {
        if (peso/(altura*altura) < 18 ) {
            return <h3> peso baixo </h3>
        } else if (peso/(altura*altura) > 25 ) {
            return <h3> peso alto </h3>
        } else {
            return <h3> peso </h3>
        }
    }
    
    
    return (
    calculaImc({peso, altura})    
    )
}

export default Filho 