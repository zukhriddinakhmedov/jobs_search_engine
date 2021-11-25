import {createStore, combineReducers, applyMiddleware, compose} from "redux"
import mainReducer from "../reducers"
import thunk from "redux-thunk"
import jobsReducer from "../reducers/jobs"
import favouritesReducer from "../reducers/favourites"

export const initialState = {
    favourites: {
       content: []
    },
    jobs: {
        data: [],
        isError: false,
        isLoading: true,
    }
}
const aComposeThatAlwaysWorks = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const bigReducer = combineReducers({
    jobs: jobsReducer,
    favourites: favouritesReducer,
})

const configureStore = createStore(
    bigReducer,
    initialState,
    aComposeThatAlwaysWorks(applyMiddleware(thunk))
)

export default configureStore