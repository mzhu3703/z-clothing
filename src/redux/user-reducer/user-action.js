import {UserActionTypes} from './user-types'
//accepts user as argument and sets the user to the payload
export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
  });
  