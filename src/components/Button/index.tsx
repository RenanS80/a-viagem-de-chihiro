import './styles.css';

type Props = {
    name: string;
}

function Button({ name } : Props) {
    return (
        <a href="https://www.youtube.com/watch?v=SgZI655GgHk" className="watch-trailer" role="button" target="_blank" rel="noreferrer">
            {name}
        </a> 
    )
}

export default Button;