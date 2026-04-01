import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Decks = () => {
    const { id } = useParams()
    const [deck, setDeck] = useState(null)

    useEffect(() => {
        const fetchDeck = async () => {
            const response = await fetch('/api/decks/' + id)
            const json = await response.json()

        if (response.ok) {
            setDeck(json)
        }
    }

    fetchDeck()
    }, [id])

    return (
        <div className="deck">
            {deck && (
                <>
                <h2>{deck.title}</h2>
                <p>{deck.description}</p>
                </>
                )
            }
        </div>
    )
}

export default Decks
