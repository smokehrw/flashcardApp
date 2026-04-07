import { createContext, useReducer } from "react";

export const DecksContext = createContext()

//action.payload IS the deck
export const decksReducer = (state, action) => {
    switch (action.type) {
        case 'SET_DECKS':
            return {
                decks: action.payload
            }
        case 'CREATE_DECK':
            return {
                decks: [action.payload, ...state.decks]
            }
        case 'UPDATE_DECK':
            return {
                decks: (state.decks || []).map(d =>
      d._id === action.payload._id ? action.payload : d)
            }
        case 'DELETE_DECK':
            return {
                decks: state.decks.filter((d) => d._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const DecksContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(decksReducer, {
        decks: []
    })

    return (
        <DecksContext.Provider value={{...state, dispatch}}>
            { children }
        </DecksContext.Provider>
    )
}
