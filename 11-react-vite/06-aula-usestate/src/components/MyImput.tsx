import { useState } from "react";

export const MyInput = () => {
    const [text, setText] = useState("");
    return (
        <>
            <input
                type="text"
                placeholder="Digite algo..."
                value={text}
                // event é o evento de mudança do input, e target.value é o valor atual do input. Então, toda vez que o usuário digitar algo, o estado text será atualizado com o valor atual do input.
                onChange={(event) => setText(event.target.value)}
            />
            
            <p>Você digitou: {text}</p>
            {/* Criando uma função para limpar o input */}
            <button onClick={() => setText("")}>Limpar</button>
        </>
    );
};