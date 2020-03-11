import {
  GETTING_CURRENT_USER,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAIL,
  CLEAR_USER_ERRORS,
} from '../actions/userActions';

import {
  ADD_LOCATION_SUCCESS
} from '../actions/locationActions';

import {
  LOG_OUT
} from '../actions/authActions';

import buildLocationArray from './utils/locationsBuilder';

const initialState = {
    locations: [],
    info: undefined,
    gettingUserInfo: false,
    error: undefined,
}

const userReducer = (state = initialState, action) => {
  switch (action.type){
    case GETTING_CURRENT_USER:
      return {
        ...state,
        gettingUserInfo: true,
      }
    case GET_USER_INFO_SUCCESS:
      return{
        ...state,
        locations: buildLocationArray(action.info),
        info: action.info,
        gettingUserInfo: false,
      }
    case GET_USER_INFO_FAIL:
      return{
        ...state,
        error: action.error.message,
        gettingUserInfo: false,
      }

    case ADD_LOCATION_SUCCESS:
      return{
        ...state,
        locations: [...state.locations, action.location]
      }

    case CLEAR_USER_ERRORS:
      return{
        ...state,
        error: undefined,
      }

    case LOG_OUT:
      return{
        state: initialState
      }
    default:
      return state
  }
}

export default userReducer;