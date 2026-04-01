import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardDetails from '../components/CardDetails'

const Decks = () => {
    const { id } = useParams()
    const [deck, setDeck] = useState(null)
    const [cards, setCards] = useState([])

    useEffect(() => {
        const fetchDeck = async () => {
            const response = await fetch('/api/decks/' + id)
            const json = await response.json()

            if (response.ok) {
                setDeck(json)
            }
    }
        const fetchCards = async () => {
            const response = await fetch('/api/cards/deck/' + id)
            const json = await response.json()

            if (response.ok) {
                setCards(json)
            }
        } 


    fetchDeck()
    fetchCards()
    }, [id])


    return (
        <div>
            <div className="deck">
            {deck && (
                <>
                <h2>{deck.title}</h2>
                <p>{deck.description}</p>
                </>
                )
            }
            </div>
            <div>
                {cards.map(card => (
                    <CardDetails key={card._id} card={card}/>
                ))}
            </div>
        </div>
        
    )
}

export default Decks
