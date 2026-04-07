import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import FlashcardDetails from '../components/FlashcardDetails'

const Cards = () => {
    const { id } = useParams()
    const [deck, setDeck] = useState(null)
    const [cards, setCards] = useState([])
    const [loading, setLoading] = useState(true)

    const [currentIndex, setCurrentIndex] = useState(0)

    const navigate = useNavigate()

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

    if (loading || cards.length === 0) return <p>No cards</p>;

    const handleNext = () => {
        setCurrentIndex(prev => Math.min(prev + 1, cards.length - 1))    
    }

    const handlePrev = () => {
        setCurrentIndex(prev => Math.max(prev - 1, 0))
    }

    const currentCard = cards[currentIndex]

    return (
        <div className="deck-page">
            <div className="sidebar-left"/>
            <div className="sidebar-right"/>
            <div className="content">
                <div className="flashcard-container">
                    <FlashcardDetails key={currentCard._id} card={currentCard}/>
                    <span>
                        {currentIndex + 1} / {cards.length}
                    </span>
                    <button disabled={currentIndex === 0} onClick={handlePrev}>LEFT</button>
                    <button disabled={currentIndex === cards.length - 1} onClick={handleNext}>RIGHT</button>
                    <button>Back</button>
                </div>
            </div>
            <div className="footer"></div>
        </div>
    )
}

export default Cards
