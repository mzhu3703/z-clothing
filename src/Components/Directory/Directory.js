import React from 'react'
import MenuItem from '../MenuItems/MenuItems'
import './Directory.scss'

// array that stores all the different kinds of clothing categories 
const sections = [
    {
      title: 'Hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'Jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'Sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'Womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'Mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    }
  ];

//Page that holds all the links to different clothings Parent is Homepage 
function Directory(){
    return(
        <div className = 'directory-menu'>
            {sections.map(({id, ...otherSectionProps}) => (
                <MenuItem key = {id} {...otherSectionProps}/>
            ))}
        </div>
    )

}

export default Directory;