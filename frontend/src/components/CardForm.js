import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const CardForm = ({setCards, closeModal}) => {
    const {id} = useParams()
    
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!question.trim() || !answer.trim()) {
            setError('Both Term and Definition are required')
            return
        }

        const card = {deckId: id, question, answer}

        const response = await fetch('/api/cards', {
            method: 'POST',
            body: JSON.stringify(card),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        
        if (response.ok){
            setQuestion('')
            setAnswer('')
            console.log('New card created', json)
            setCards(prevCards => [...prevCards, json])
            closeModal()
        }
    }

    return (
        <form className="card-form" onSubmit={handleSubmit}>
            <h3>Create a new Card</h3>
            {error && <div className="error">{error}</div>}
            <h4>Term:</h4>
            <textarea 
                type="text" 
                onChange={(e) => {
                    setQuestion(e.target.value)
                    e.target.style.height = 'auto'
                    e.target.style.height = e.target.scrollHeight + 'px'
                    }}
                value={question}
            />

            <h4>Definition:</h4>
            <textarea 
                type="text" 
                onChange={(e) => {
                    setAnswer(e.target.value)
                    e.target.style.height = 'auto'
                    e.target.style.height = e.target.scrollHeight + 'px'
                    }}
                value={answer}
            />
            <button>Create Card</button>
        </form>
    )
}

export default CardForm