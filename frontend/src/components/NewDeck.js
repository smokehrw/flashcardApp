import DeckForm from '../components/DeckForm'

import { useRef } from 'react'
import { FaAngleLeft, FaPlus } from 'react-icons/fa'

const NewDeck = () => {
  const dialogRef = useRef(null)

  const openModal = () => {
    dialogRef.current.showModal()
  }

  const closeModal = (e) => {
    e.stopPropagation()
    dialogRef.current.close()
  }

    return(
        <div className="new-deck-card">
            <div> 
                <h2>Create a new Deck</h2> 
            </div>

            <div className="add-deck-btn">
                <button id="open-modal-btn" onClick={openModal}>Add</button>
            </div>

            <dialog ref={dialogRef} onClick={(e) => {e.stopPropagation()}}>
                <DeckForm/>
                <button id="close-modal-btn" onClick={closeModal}>Back</button>
            </dialog>
        </div>
    )
}

export default NewDeck