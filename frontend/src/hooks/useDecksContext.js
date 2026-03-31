import { DecksContext } from "../context/DeckContext";
import { useContext } from "react";

export const useDecksContext = () => {
    const context = useContext(DecksContext)

    if(!context) {
        throw Error("useDecksContext must be used inside a decksContextProvider")
    }

    return context
}