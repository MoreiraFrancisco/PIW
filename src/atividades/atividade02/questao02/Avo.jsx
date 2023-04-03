import Filho from "./Filho"
import PokemonContexto from "./PokeContext"

const Avo = () => {
    const numero = "999";
    return (
    <PokemonContexto.Provider value={numero}>
        <div>
            <h1>Avô</h1>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`}
                alt="pokemao"
            />
            <Filho />
        </div>
    </PokemonContexto.Provider>
    )
}
export default Avo