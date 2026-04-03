import DeckForm from '../components/DeckForm'

import { useRef } from 'react'
import { useNavigate } from "react-router-dom"

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

            <div>
                <button id="open-modal-btn" onClick={openModal}>Add Button</button>
            </div>

            <dialog ref={dialogRef} onClick={(e) => {e.stopPropagation()}}>
                <DeckForm/>
                <button id="close-modal-btn" onClick={closeModal}>x</button>
            </dialog>
        </div>
    )
}

export default NewDeck