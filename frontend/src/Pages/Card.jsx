function Card(props) {
    return (
        <>
        <div className="card">
            <img src={props.img} />
            <h4>{props.title}</h4>
            <p>{props.year}</p>
        </div>
        </>
    )
}

export default Card