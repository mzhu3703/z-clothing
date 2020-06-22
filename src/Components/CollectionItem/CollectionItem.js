import React from 'react'
import '/home/michael/z-clothing/src/Components/CollectionItem/CollectionItemStyles.scss'
import CustomButton from '../CustomButton/CustomButton'
//Parent is CollectionList, data of each clothing item 
function CollectionItem(props) {
    const { name, imageSrc, price } = props
    return (
        <div className='collectionItem'>
            <div className='image' style={{ backgroundImage: `url(${imageSrc})` }}>
              
            </div>

            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton inverted>Add to Cart</CustomButton>
        </div>
    )
}

export default CollectionItem