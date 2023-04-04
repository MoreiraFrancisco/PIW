import { useState, useEffect } from "react"

const FunctionEstados = () => {
    

    const [contador, setContador] = useState(0)
    const [parOuImpar, setParOuImpar] = useState(true)
   
    useEffect(
        () => {
            if(contador%2===0) {
                setParOuImpar(true)
            } else setParOuImpar(false)
        }
        ,
        [contador]

    )
   
   
    const acaoBotao = () => {
    setContador(contador+1)
   } 
    
    return (
        <>
            <h1> Contador: {contador}</h1>
            <h1> É par? {""+parOuImpar}</h1>
            <button onClick={acaoBotao}>
                Aumentar contador
            </button>
        </>
    )
}

export default FunctionEstados