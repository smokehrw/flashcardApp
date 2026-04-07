import CardForm from '../components/CardForm'
import EditDeckForm from '../components/EditDeckForm'
import { useRef } from 'react'

const NewCard = ({ setCards, setDeck, deck }) => {
  const cardDialogRef = useRef(null)
  const deckDialogRef = useRef(null)

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

  return (
    <div className="add-card">
      <button id="add-card-btn" onClick={openCardModal}>Add Card</button>

      <dialog ref={cardDialogRef}>
        <CardForm setCards={setCards} closeModal={() => closeCardModal}/>
        <button id="close-modal-btn" onClick={closeCardModal}>x</button>
      </dialog>

      <button id="edit-card-btn" onClick={openDeckModal}>Edit Deck Details</button>

      <dialog ref={deckDialogRef}>
        <EditDeckForm closeModal={() => closeDeckModal} deck={deck} setDeck={setDeck}/>
        <button id="close-modal-btn" onClick={closeDeckModal}>x</button>
      </dialog>
    </div>
  )
}

export default NewCard