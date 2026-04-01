
const CardDetails = ({card}) => {
    return (
        <div>
            <h3>{card.question}</h3>
            <h3>{card.answer}</h3>
        </div>
    )
}

export default CardDetails