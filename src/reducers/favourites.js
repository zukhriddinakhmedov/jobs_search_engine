import { initialState } from "../store";
import { ADD_TO_FAVOURITES } from "../actions";

const favouritesReducer = (state = initialState.favourites, action) => {
    switch (action.type) {
        case ADD_TO_FAVOURITES:
            return{
                ...state,
                content: action.payload,
            }
            default:
           return state
        }
        
}

export default favouritesReducer