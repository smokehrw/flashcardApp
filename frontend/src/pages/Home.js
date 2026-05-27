import { useEffect } from 'react'
import { useDecksContext } from '../hooks/useDecksContext'
import heroFlashcards from '../assets/images/flashcards.svg'

import DeckDetails from '../components/DeckDetails'
import DeckForm from '../components/DeckForm'
import NewDeck from '../components/NewDeck'
import Footer from '../components/Footer'

import './Home.css'

const Home = () => {
    const {decks, dispatch} = useDecksContext()

    useEffect(() => {
        const fetchDecks = async () => {
            const response = await fetch('/api/decks')
            const json = await response.json()

            if (response.ok){
                dispatch({type: 'SET_DECKS', payload: json})
            }
        }

        fetchDecks()
    }, [])
    return (
        <div className="home-page"> 
            <div className="content">
                <div className="hero-section">
                    <div className="hero-left">
                        <h1>CREATE.
                        <br/>
                        STUDY.
                        <br/>
                        MASTER.
                        </h1>
                        <h4>Create custom decks, study smarter, and track your 
                            <br/>
                            learning progress through interactive flashcards.
                        </h4>
                        <button className="get-started-btn">Get Started</button>
                    </div>
                    
                    <div className="hero-right">
                        <img src={heroFlashcards} alt="Hero Flashcards" className="hero-image"/>
                    </div>
                </div>
                    <div className="separator">
                        <div className="explore-decks-label"><h1>EXPLORE ALL FLASHCARDS</h1></div>
                    </div>
                    
                    <div className="decks-section">
                        <div className="explore-decks-bar">
                            <h2>EXPLORE</h2>
                            <input type="search" id="search-bar" placeholder="Search for decks..." onkeyup="filterResults()"></input>
                        </div>
                        <div className="decks">
                        {decks && decks.map((deck) => (
                            <DeckDetails key={deck._id} deck={deck}/>
                        ))}
                        
                        </div>
                    </div>   
            </div>
            <div className="separator"/>
            <Footer />
        </div>
    )
}

export default Home;