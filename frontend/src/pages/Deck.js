import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import EditCardForm from '../components/EditCardForm'
import DeckBtns from '../components/DeckBtns'
import Footer from '../components/Footer'

import './Deck.css'

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
            //<NewCard setCards={setCards} deck={deck} setDeck={setDeck} cards={cards} setError={setError}/>
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
            <div className="content">
                <div className="deck-section">
                    <div className="deck">
                        <div className="deck-header">
                            {deck && (
                                <>
                                <h2>{deck.title}</h2>
                                <p>{deck.description}</p>
                                {error && <div className="error">{error}</div>}
                                </>
                                )
                            }
                        </div>
                        <DeckBtns setError={setError} cards={cards} setCards={setCards} setDeck={setDeck} deck={deck}/>
                    </div>
                    <div className="cards-container">
                        <div className="cards">
                            {cards.map(card => (
                            <EditCardForm key={card._id} card={card} setCards={setCards}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}

export default Deck
