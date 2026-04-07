import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardDetails from '../components/CardDetails'
import NewCard from '../components/NewCard'

const Decks = () => {
    const { id } = useParams()
    const [deck, setDeck] = useState(null)
    const [cards, setCards] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchDeck = async () => {
            const response = await fetch('/api/decks/' + id)
            const json = await response.json()

            if (response.ok) {
                setDeck(json)
                setLoading(false)
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

    if (loading) return null;

    return (
        <div className="deck-page">
            <div className="sidebar-left"/>
            <div className="sidebar-right"/>
            <div className="content">
                <div className="deck">
                    {deck && (
                        <>
                        <h2>{deck.title}</h2>
                        <p>{deck.description}</p>
                        </>
                        )
                    }
                </div>
                <NewCard setCards={setCards} deck={deck} setDeck={setDeck}/>
                <div className="cards-container">
                {cards.map(card => (
                    <CardDetails key={card._id} card={card}/>
                ))}
                </div>
            </div>
        </div>
        
    )
}

export default Decks
