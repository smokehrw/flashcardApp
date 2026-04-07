import { useEffect } from 'react'
import { useDecksContext } from '../hooks/useDecksContext'

import DeckDetails from '../components/DeckDetails'
import DeckForm from '../components/DeckForm'
import NewDeck from '../components/NewDeck'


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
            <div className="sidebar-left"/>
            <div className="sidebar-right"/>
            <div className="content">
                <div className="all-decks-label"><h3>All Decks</h3></div>
                <div className="decks">
                    {decks && decks.map((deck) => (
                        <DeckDetails key={deck._id} deck={deck}/>
                    ))}
                    <NewDeck/>
                </div>
            </div>
        </div>
    )
}

export default Home;