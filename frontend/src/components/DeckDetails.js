import { useDecksContext } from "../hooks/useDecksContext"
import { useNavigate } from "react-router-dom"

const DeckDetails = ({deck}) => {
    const {dispatch} = useDecksContext()
    const navigate = useNavigate()

    const handleDelete = async () => {
        const response = await fetch('/api/decks/' + deck._id, {
            method: 'DELETE',
            })  
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_DECK', payload: json})
        }
    }

    const handleClick = () => {
        navigate(`/decks/${deck._id}`)
    }

    return (
        <div className="deck-details">
            <h4>{deck.title}</h4>
            <p>{deck.description}</p>
            <span onClick={handleDelete}>Delete</span>
            <span onClick={handleClick}>View or Edit</span>
        </div>
    )
}

export default DeckDetails