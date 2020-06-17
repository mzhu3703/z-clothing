import React from 'react'
import './Homepage.scss'
import Directory from '../../Components/Directory/Directory'
  
//Parent of all the components, Child is Directory which renders all the shopping items categories 
function Homepage(){
    return(
        <div className = 'homepage'>
            <Directory/>
        </div>
    )
}

export default Homepage;