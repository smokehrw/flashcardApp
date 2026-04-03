import { useState } from "react"

const CardDetails = ({card}) => {
    const [isFlipped, setFlipped] = useState(null)

    const handleFlip = () => {
        setFlipped(!isFlipped)
    }

    return (
        <div className="card-details" onClick={handleFlip}>
            <h3>{isFlipped ? card.answer : card.question}</h3>
        </div>
    )
}

export default CardDetails