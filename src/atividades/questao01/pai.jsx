
import Filho from "./filho"
let Pai = () => {
    return (
        <div>
            <Filho altura={1.8} peso={70} />
            <Filho altura={1.5} peso={90} />
            <Filho altura={1.9} peso={30} />
        </div>
    )
}

export default Pai 