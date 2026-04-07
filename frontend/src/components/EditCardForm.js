import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { FaCheck, FaMinus } from 'react-icons/fa'

const EditCardForm = ({card, setCards}) => {
    const { id } = useParams()
    
    const [question, setQuestion] = useState(card.question || '')
    const [answer, setAnswer] = useState(card.answer || '')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!question.trim() || !answer.trim()) {
            setError('Both Term and Definition are required')
            return
        }
        console.log("card id:" + card._id)

        const ucard = { question, answer}

        const response = await fetch(`/api/cards/${card._id}`, {
            method: 'PATCH',
            body: JSON.stringify(ucard),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        
        if (response.ok){
            setError(null)
            console.log('Card Updated', json)
            setCards(prevCards => prevCards.map(c => c._id === json._id ? json : c))
        }
    }

    const hasChanged =
        question.trim() !== card.question ||
        answer.trim() !== card.answer

    return (
        <div className="card-details">
             <form className="edit-card-form" onSubmit={handleSubmit}>
                {error && <div className="error">{error}</div>}
                    <div>
                        <h4>Term</h4>
                        <textarea
                        type="text"
                        value={question}
                        onChange={(e) => {
                            setQuestion(e.target.value)
                            e.target.style.height = 'auto'
                            e.target.style.height = e.target.scrollHeight + 'px'
                        }}
                        />
                    </div>
                    
                    <div>
                        <h4>Definition</h4>
                        <textarea
                        type="text"
                        value={answer}
                        onChange={(e) => {
                            setAnswer(e.target.value)
                            e.target.style.height = 'auto'
                            e.target.style.height = e.target.scrollHeight + 'px'
                        }}
                        />
                    </div>
                    <div className="controls">
                        <button 
                            type="submit"
                            disabled={!hasChanged}
                        >
                            {hasChanged ? <FaCheck className="icon save"/> : <FaMinus className="icon none"/>}
                        </button>
                    </div>
            </form>
        </div>
    )
}

export default EditCardForm