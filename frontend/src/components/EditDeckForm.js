import { useState, useEffect } from "react"
import { useDecksContext } from "../hooks/useDecksContext"
import { useParams } from "react-router-dom"

const EditDeckForm = ({setDeck, deck, closeModal}) => {
    const {dispatch} = useDecksContext()
    const {id} = useParams()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [error, setError] = useState(null)

    useEffect(() => {
        if (deck) {
            setTitle(deck.title)
            setDescription(deck.description)
        }
    }, [deck])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!title.trim() || !description.trim()) {
            setError('Both title and description are required')
            return
        }

        const deck = {title, description}

        const response = await fetch(`/api/decks/${id}`, {
            method: 'PATCH',
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
            setError(null)
            console.log('Deck Updated', json)
            dispatch({type: 'UPDATE_DECK', payload: json})
            setDeck(deck)
            closeModal()
        }
    }

    return (
        <form className="deck-form" onSubmit={handleSubmit}>
            <h3>Update Deck Details</h3>
            {error && <div className="error">{error}</div>}

            <label>Deck Title:</label>
            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>

            <label>Deck Description:</label>
            <input type="text" onChange={(e) => setDescription(e.target.value)} value={description}/>

            <button>Save</button>
        </form>
    )
}

export default EditDeckForm