import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const CardForm = ({setCards, closeModal}) => {
    const {id} = useParams()
    
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')
    const [error, setError] = useState(null)

    console.log(id, question, answer)

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()

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

            <label>Question:</label>
            <input 
                type="text" 
                onChange={(e) => setQuestion(e.target.value)} 
                value={question}
            />

            <label>Answer:</label>
            <input 
                type="text" 
                onChange={(e) => setAnswer(e.target.value)} 
                value={answer}
            />

            <button>Create Card</button>
        </form>
    )
}

export default CardForm