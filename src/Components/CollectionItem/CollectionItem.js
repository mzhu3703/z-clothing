import React from 'react'
import '/home/michael/crwn-clothing/src/Components/CollectionItem/CollectionItemStyles.scss'

//Parent is CollectionList, data of each clothing item 
function CollectionItem(props) {
    const { name, imageSrc, price } = props
    return (
        <div className='collectionItem'>
            <div className='image' style={{ backgroundImage: `url(${imageSrc})` }}>
                <div className='content'>
                    <h4 className='subTitle'> ADD TO CART </h4>
                </div>
            </div>

            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>

        </div>
    )
}

export default CollectionItem