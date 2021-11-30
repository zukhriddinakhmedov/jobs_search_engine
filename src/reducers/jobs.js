// import { initialState } from "../store";
import {GET_JOBS, GET_JOBS_ERROR, TOGGLE_LOADER} from "../actions/index.js"

export const initialState = {
 
    jobs: {
        data: [],
        isError: false,
        isLoading: true,
    }
}

const jobsReducer = (state = initialState.jobs, action) => {
    switch (action.type) {
      case GET_JOBS:
        return {
          ...state,
          data: action.payload,
        }
      case GET_JOBS_ERROR:
        return {
          ...state,
          isError: true,
        }
      case TOGGLE_LOADER:
        return {
          ...state,
          isLoading: action.payload,
        }
      default:
        return state
    }
  }
  
  export default jobsReducer
  