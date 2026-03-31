import { useState } from "react"

const DeckForm = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

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
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Create a new Deck</h3>
            <label>Deck Title:</label>
            <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            />

            <label>Deck description:</label>
            <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            />

            <button>Create Deck</button>
        </form>
    )
}

export default DeckForm