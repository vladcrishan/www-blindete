import createReducer from 'state/utils/createReducer'

// Types
export const SET_LANGUAGE_SUCCESS = '[language] LOGIN / REQUEST'

// Initial State
const initialState = {
  language: 'ro'
}

// Reducer
export default createReducer(initialState)({
  [SET_LANGUAGE_SUCCESS]: (state, action) => ({
    language: action.payload.language
  })
})

// Actions
export const setLanguage = language => async dispatch => {
  try {
    dispatch(setLanguageSuccess(language))
  } catch (error) {
    console.log(error)
  }
}

export const setLanguageSuccess = language => ({
  type: SET_LANGUAGE_SUCCESS,
  payload: { language }
})
