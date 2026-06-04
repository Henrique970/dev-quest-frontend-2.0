import { useState } from "react";

type MyInputNumberProps = {
    onInitialChange: (numero: number) => void;
    onEndChange: (numero: number) => void;
}

export const MyInputNumber = ({ onInitialChange, onEndChange }: MyInputNumberProps) => {
    const [initialNumber, setInitialNumber] = useState("");
    const [endNumber, setEndNumber] = useState("");

    return (
        <>
            <input
                type="number"
                placeholder="Digite o número inicial..."
                value={initialNumber}
                onChange={(evento) => {
                    const valor = evento.target.value;
                    setInitialNumber(valor);
                    // Executa a função que veio do pai passando o número convertido
                    onInitialChange(Number(valor));
                }}
            />
            <input
                type="number"
                placeholder="Digite o número final..."
                value={endNumber}
                onChange={(evento) => {
                    const valor = evento.target.value;
                    setEndNumber(valor);
                    // Executa a função que veio do pai passando o número convertido
                    onEndChange(Number(valor));
                }}
            />

            <p>Seu Início do contador é: {initialNumber}</p>
            <p>Seu Fim do contador é: {endNumber}</p>
        </>
    )
}