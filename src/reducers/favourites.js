
import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from "../actions";

export const initialState = {
    favourites: {
       content: []
    },
   
}

export const favouritesReducer = (state = initialState.favourites, action) => {
    // console.log(action, state)

    switch (action.type) {
        case ADD_TO_FAVOURITES:
            return{
                ...state,
                content: [...state.content, action.payload]
            }
            case REMOVE_FROM_FAVOURITES:
            return{
                ...state,
                content: state.content.filter((indexToRemove) => indexToRemove !== action.payload)
            }
            default:
           return state
        };
    }
