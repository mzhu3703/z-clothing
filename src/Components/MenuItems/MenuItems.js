import React from 'react'
import './MenuItems.scss'
import { withRouter } from "react-router-dom";

// Parent is Directory. Contains the display values of shopping categories(MEN, WOMAN, JACKETS, SNEAKERS)
function MenuItem(props) {
    const { title, imageUrl, size,linkUrl,match, history } = props;
    return (
        <div className={`${size} menu-item`} onClick = {() => history.push(`${match.url}${linkUrl}`)} >
            <div className = 'background-image' style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className='content'>
                <h1 className='title'> {title.toUpperCase()} </h1>
                <span className='subTitle'> SHOP NOW </span>
            </div>
        </div>

    )
}

export default withRouter(MenuItem);