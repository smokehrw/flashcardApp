import { useState } from "react"
import { useDecksContext } from "../hooks/useDecksContext"
import { useNavigate } from "react-router-dom"

const DeckForm = () => {
    const {dispatch} = useDecksContext()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [error, setError] = useState(null)

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!title.trim() || !description.trim()) {
            setError('Both title and description are required')
            return
        }

        const deck = {title, description}

        const response = await fetch('/api/decks', {
            method: 'POST',
            body: JSON.stringify(deck),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        
        if (response.ok){
            setTitle('')
            setDescription('')
            setError(null)
            console.log('New deck created', json)
            dispatch({type: 'CREATE_DECK', payload: json})

            navigate(`/decks/${json._id}`)
        }
    }

    return (
        <form className="deck-form" onSubmit={handleSubmit}>
            <h3>Create a new Deck</h3>
            {error && <div className="error">{error}</div>}

            <label>Deck Title:</label>
            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>

            <label>Deck description:</label>
            <input type="text" onChange={(e) => setDescription(e.target.value)} value={description}/>

            <button>Create Deck</button>
        </form>
    )
}

export default DeckForm