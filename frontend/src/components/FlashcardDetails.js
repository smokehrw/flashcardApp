import { useState } from "react";

const FlashcardDetails = ({ card }) => {
    const [isFlipped, setFlipped] = useState(false);

    return (
        <div
            className={`flashcard-details ${isFlipped ? "flipped" : ""}`}
            onClick={() => setFlipped(!isFlipped)}
        >
            <div className="flashcard-inner">
                <div className="flashcard-front">
                    <h2>{card.question}</h2>
                </div>

                <div className="flashcard-back">
                    <h2>{card.answer}</h2>
                </div>
            </div>
        </div>
    );
};

export default FlashcardDetails;