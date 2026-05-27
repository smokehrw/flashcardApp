import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import EditCardForm from '../components/EditCardForm'
import NewCard from '../components/NewCard'
import Footer from '../components/Footer'

const Deck = () => {
    const { id } = useParams()
    const [deck, setDeck] = useState(null)
    const [cards, setCards] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

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
                        {error && <div className="error">{error}</div>}
                        </>
                        )
                    }
                </div>
                <NewCard setCards={setCards} deck={deck} setDeck={setDeck} cards={cards} setError={setError}/>
                
                <div className="cards-container">
                    {cards.map(card => (
                        <EditCardForm key={card._id} card={card} setCards={setCards}/>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
        
    )
}

export default Deck
