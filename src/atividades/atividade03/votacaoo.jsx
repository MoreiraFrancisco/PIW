import { useEffect, useState } from "react"

const Votacao = () => {
    
    const [fortaleza, setFortaleza] = useState(0)
    const [quixada, setQuixada] = useState(0)
    const [quixeramobim, setQuixeramobim] = useState(0)
    const [tilambuco, setTilambuco] = useState(0)
    const [maior, setMaior] = useState("")
    const [menor, setMenor] = useState("")
    
    useEffect(
        () => {
            const cidades = [fortaleza,quixada,quixeramobim,tilambuco]

            for(let i=0;i<cidades.length;i++ ) {
                if (cidades[i] === maior) 
                setMaior(cidades[i])
                if (cidades[i] === menor)
                setMenor(cidades[i])
            }
        } ,
        [fortaleza, quixada, quixeramobim, tilambuco]
    )


    const votarFortal = () => {
        setFortaleza(fortaleza + 1)
    }

    const votarQuixa = () => {
        setQuixada(quixada + 1)
    }

    const votarQuixe = () => {
        setQuixeramobim(quixeramobim + 1)
    }

    const votarTila = () => {
        setTilambuco(tilambuco + 1)
    }

    
    
    return (
        <>
        <h1>Votação</h1>
        <h2>Fortaleza: {fortaleza}</h2>
        <h2>Quixadá: {quixada}</h2>
        <h2>Quixeramobim: {quixeramobim}</h2>
        <h2>Tilambuco: {tilambuco}</h2>

        <button onClick={votarFortal}>votar em Fortaleza</button>
        <button onClick={votarQuixa}>votar em Quixada</button>
        <button onClick={votarQuixe}>votar em Quixeramobim</button>
        <button onClick={votarTila}>votar em Tilambuco</button>

        <h3>Cidade mais votada: {maior}</h3>
        <h3>Cidade menos votada: {menor}</h3>
        </>
    )
}

export default Votacao
