import React from 'react'
import '/home/michael/z-clothing/src/Components/CollectionItem/CollectionItemStyles.scss'
import CustomButton from '../CustomButton/CustomButton'
import {connect} from 'react-redux'
import {addItem} from '../../redux/cart/cart.actions'
import {toggleCart} from '../../redux/cart/cart.actions'

//Parent is CollectionList, data of each clothing item 
function CollectionItem(props) {
    const { name, imageUrl, price} = props.item


    const handleClick = () => {
        props.addItem(props.item)
    }

    return (
        <div className='collectionItem' >
            <div className='image' style={{ backgroundImage: `url(${imageUrl})` }}>
              
            </div>

            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton inverted onClick = {handleClick}>Add to Cart</CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
  });

export default connect( null,mapDispatchToProps)(CollectionItem);
