import { useState, type ChangeEvent, type FormEvent } from "react";


export const UserInput = () => {

    const [typedText, setTypedText] = useState("");
    const [displayedText, setdisplayedText] = useState("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTypedText(event.target.value);
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setdisplayedText(typedText);
    }

    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder="Digite algo para aparecer na tela" onChange={handleChange} />
                <button type="submit">Enviar</button>
            </form>
            <p>Texto enviado: {displayedText}</p>
        </>
    )
}

