import {createStore, combineReducers, applyMiddleware, compose} from "redux"
import thunk from "redux-thunk"
import jobsReducer from "../reducers/jobs.js"
import {favouritesReducer} from "../reducers/favourites.js"

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

console.log(jobsReducer, 'JOBS REDUCER  STORE<<<<<<<<<<<<<<<<<<<<<<<<<')
console.log(favouritesReducer, '<<<<<<<<<<<<<<<<<<<<<<<<<')
const aComposeThatAlwaysWorks = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const bigReducer = combineReducers({
    jobs: jobsReducer,
    favourites: favouritesReducer
})

const configureStore = createStore(
    bigReducer,
    initialState,
    aComposeThatAlwaysWorks(applyMiddleware(thunk))
)

export default configureStore