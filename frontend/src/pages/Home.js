import { useEffect, useState } from 'react'
import DeckDetails from '../components/DeckDetails'
import DeckForm from '../components/DeckForm'

const Home = () => {
    const [decks, setDecks] = useState(null)

    useEffect(() => {
        const fetchDecks = async () => {
            const response = await fetch('/api/decks')
            const json = await response.json()

            if (response.ok){
                setDecks(json)
            }
        }

        fetchDecks()
    }, [])
    return (
        <div>
            <div className="home">
                {decks && decks.map((deck) => (
                    <DeckDetails key={deck._id} deck={deck}/>
                ))}
            </div>
        <DeckForm/>
        </div>
        
    )
}

export default Home;