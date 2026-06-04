type TaskProps = {
    description?: string;
};

// Para usar defoult props, basca colocar o sinal de "=" e o valor entre aspas.
const NewTask = ({description = "Nenhuma descrição fornecida"}: TaskProps) => {
    return <p> Tarefa: {description}</p>
}

export default NewTask;