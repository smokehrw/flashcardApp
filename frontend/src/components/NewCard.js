import CardForm from '../components/CardForm'
import EditDeckForm from '../components/EditDeckForm'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaAngleLeft } from 'react-icons/fa'

const NewCard = ({ setError, cards, setCards, setDeck, deck }) => {
  const cardDialogRef = useRef(null)
  const deckDialogRef = useRef(null)
  const navigate = useNavigate()

  const openCardModal = () => {
    cardDialogRef.current.showModal()
  }

  const closeCardModal = (e) => {
    e.stopPropagation()
    cardDialogRef.current.close()
  }

  const openDeckModal = () => {
    deckDialogRef.current.showModal()
  }

  const closeDeckModal = (e) => {
    e.stopPropagation()
    deckDialogRef.current.close()
  }

  const handleClick = () => {
    if (cards.length < 2) {
      setError('You need at least TWO cards to study a deck')
      navigate(`/decks/${deck._id}`)
    } else {
      navigate(`/decks/${deck._id}/study`)
      console.log("sending to study mode")    
    }
  }

  return (
    <div className="add-card">
      <button id="add-card-btn" onClick={openCardModal}>Add Card</button>

      <dialog ref={cardDialogRef}>
        <CardForm setCards={setCards} closeModal={() => closeCardModal}/>
        <button id="close-modal-btn" onClick={closeCardModal}><FaAngleLeft className='icon close'/></button>
      </dialog>

      <button id="edit-card-btn" onClick={openDeckModal}>Edit Deck Details</button>

      <dialog ref={deckDialogRef}>
        <div>

        </div>
        <EditDeckForm closeModal={() => closeDeckModal} deck={deck} setDeck={setDeck}/>
        <button id="close-modal-btn" onClick={closeDeckModal}><FaAngleLeft className='icon close'/></button>
      </dialog>

      <button id="study-btn" onClick={handleClick}>Study</button>
    </div>
  )
}

export default NewCard