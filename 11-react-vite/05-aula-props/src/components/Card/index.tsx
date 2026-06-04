import './Card.css';

type CardProps = {
    // O tipo React.ReactNode é um tipo especial do React que representa qualquer coisa que possa ser renderizada, como elementos JSX, strings, números, arrays de elementos, etc.
    children?: React.ReactNode;
}

const Cards = ({children}: CardProps) => {
    return <div className="card">{children || <p>Nenhum conteúdo disponívvel</p>}</div>
}

export default Cards;