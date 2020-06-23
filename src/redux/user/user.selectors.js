import {createSelector} from 'reselect'

//gets the currentUser, pulls it out one level
export const selectUser = state => state.user

// get the value we need 
export const currentUserSelector = createSelector(
    [selectUser], user => user.currentUser
)