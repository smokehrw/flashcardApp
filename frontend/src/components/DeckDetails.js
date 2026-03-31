const DeckDetails = ({deck}) => {
    return (
        <div className="deck-details">
            <h4>{deck.title}</h4>
            <p>{deck.description}</p>
        </div>
    )
}

export default DeckDetails