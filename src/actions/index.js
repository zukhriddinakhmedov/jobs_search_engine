export const GET_JOBS = "GET_JOBS"
export const GET_JOBS_ERROR = "GET_JOBS_ERROR"
export const TOGGLE_LOADER = "TOGGLE_LOADER"
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES'
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES'

export const addToFavouritesAction = (jobToAdd) => ({
    type: ADD_TO_FAVOURITES,
    payload: jobToAdd,
})

export const removeFromFavouritesAction = (indexToRemove) => ({
    type: REMOVE_FROM_FAVOURITES,
    payload: indexToRemove,
})
export const getJobsAction = () => {
    return async (dispatch) => {
      // if you're trying to dispatch something that is NOT an action WITHOUT thunk
      // everything will crash!
      // BUT if you have redux-thunk in the flow, the function you'll eventually dispatch
      // is going to be given by redux-thunk a DISPATCH function as the first argument
      console.log('Hello! this is a thunk action creator')
      // ...you can do whatever you want here
      // let's do a fetch!
      try {
        const response = await fetch('https://strive-jobs-api.herokuapp.com/jobs?search=')
        if (response.ok) {
          const data = await response.json()
          // now it's time do to the dispatch
          dispatch({
            type: GET_JOBS,
            payload: data,
          })
          setTimeout(() => {
            dispatch({
              type: TOGGLE_LOADER,
              payload: false,
            })
          }, 1000)
        } else {
          console.log('Houston, we got an error :(')
          // we can also dispatch ANOTHER action here for the error!
          dispatch({
            type: GET_JOBS_ERROR,
          })
          dispatch({
            type: TOGGLE_LOADER,
            payload: false,
          })
        }
      } catch (error) {
        console.log(error)
        dispatch({
          type: GET_JOBS_ERROR,
        })
        dispatch({
          type: TOGGLE_LOADER,
          payload: false,
        })
      }
    }
  }
  