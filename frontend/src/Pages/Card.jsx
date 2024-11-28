import './Card.css'

function Card(props) {
    return (
        <>
        <div className="card">
            <img src={props.img} />
            <p>{props.title}</p>
            <p>{props.type}</p>
            <p>{props.year}</p>
        </div>
        </>
    )
}

export default Card