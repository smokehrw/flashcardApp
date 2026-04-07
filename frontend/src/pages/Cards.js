import { use, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
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

    const handleBack = () => {
        navigate(`/decks/${deck._id}`)
    }

    const currentCard = cards[currentIndex]

    return (
        <div className="deck-page">
            <div className="sidebar-left"/>
            <div className="sidebar-right"/>
            <div className="content">
                <h2>{deck.title}</h2>
                <div className="flashcard-container">
                    <FlashcardDetails key={currentCard._id} card={currentCard}/>
                    
                    <div className="extras">
                        
                        <button disabled={currentIndex === 0} onClick={handlePrev}><FaAngleLeft/></button>
                        <span>
                        {currentIndex + 1} / {cards.length}
                        </span>
                        <button disabled={currentIndex === cards.length - 1} onClick={handleNext}><FaAngleRight/></button>
                    </div>
                    <div className="back-btn">
                        <button onClick={handleBack}>Back</button>
                    </div>
                </div>
                
            </div>
            <div className="footer"></div>
        </div>
    )
}

export default Cards
