import {createSelector} from 'reselect'

//state of directory is directory : {sections: [{Directory sections}]}

// gets us sections: [{Directory sections}]
export const selectDirectory = state => state.directory

// gets us [{sections}]
export const selectDirectorySections = createSelector([selectDirectory], directory => directory.sections)
