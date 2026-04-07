import { useState } from "react"

const FlashcardDetails = ({card}) => {

    const [isFlipped, setFlipped] = useState(null)

    const handleFlip = () => {
        setFlipped(!isFlipped)
    }

    return (
        <div className="flashcard-details" onClick={handleFlip}>
            <h3>{isFlipped ? card.answer : card.question}</h3>
        </div>
    )
}

export default FlashcardDetails