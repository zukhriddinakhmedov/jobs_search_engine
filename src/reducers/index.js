import { initialState } from "../store";

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVOURITES:
            return{
                ...state,
                favourites: {
                    ...state.favourites,
                    content: [...state.cart.content, action.payload],
                },
            }
            
    }
}

export default mainReducer