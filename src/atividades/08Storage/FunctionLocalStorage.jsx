const SaveData = () => {

    const saveData = () => {
        const aluno = {nome:"Chico", curso:"DD"}
        localStorage.setItem("aluno01", JSON.stringify(aluno))
    }

    return (
        <>
            <h1> Salvando aluno... </h1>
            {saveData()}
            <LoadData />
        </>
    )
}

const LoadData = () => {
    
    const loadData = () => {
        const alunoCarregado = JSON.parse(localStorage.getItem("aluno01"))
        return (
            <div>
                <h1> Aluno: {alunoCarregado.nome}</h1>
                <h3> Curso: {alunoCarregado.curso}</h3>
            </div>
        )
    }

    return (
        <>
            <h1> Carregando... </h1>
            {loadData()}
        </>
    )
}

export default SaveData