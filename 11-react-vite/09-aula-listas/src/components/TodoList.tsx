type Todo = {
    id: number;
    text: string;
}

export const TodoList = () => {
    const todos: Todo[] = [
        { id: 1, text: "Estudar React" },
        { id: 2, text: "Estudar TypeScript" },
        { id: 3, text: "Estudar CSS" }
    ];

    return (
        <>
            <h1>Minhas tarefas</h1>
            <ul>
                {
                    todos.map(todo => (
                        <li key={todo.id}>{todo.text}</li>
                    ))
                }
            </ul>
        </>
    )
}