import { useDecksContext } from "../hooks/useDecksContext"
import { useNavigate } from "react-router-dom"
import { FaTrash} from 'react-icons/fa'

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
        <div className="deck-details" onClick={handleClick}>
            <div>
                <h4>{deck.title}</h4>
            </div>
            <div>
                <p>{deck.description}</p>
            </div>
            <div className="card-actions">
                <FaTrash className="icon delete" onClick={(e) => {
                    e.stopPropagation()
                    handleDelete()}}/>
            </div>  
        </div>
    )
}

export default DeckDetails