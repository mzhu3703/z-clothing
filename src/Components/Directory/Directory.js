import React from 'react'
import MenuItem from '../MenuItems/MenuItems'
import './Directory.scss'
import {connect} from 'react-redux'
import {selectDirectorySections} from '../../redux/directory/directory.selector'

//Page that holds all the links to different clothings Parent is Homepage 
function Directory(props){
    const sections = props.directory
    console.log(sections)
    return(
        <div className = 'directory-menu'>
            {sections.map(({id, ...otherSectionProps}) => (
                <MenuItem key = {id} {...otherSectionProps}/>
            ))}
        </div>
    )

}

function mapStateToProps(state){
  return{
    directory: selectDirectorySections(state)
  }
}

export default connect(mapStateToProps)(Directory);