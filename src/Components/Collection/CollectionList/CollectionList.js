import React from 'react'
import './CollectionPreviewStyles.scss'
import CollectionItem from '../CollectionItem/CollectionItem'


// Parent is ShopPage, contains Collection Items 
function CollectionList(props) {
    const { title, items } = props;
    return (
        <div className='collectionList'>
            <div className='title'>
                {title.toUpperCase()}
            </div>
            {/* Items of each clothing displayed on Shop page */}
            <div className='items'>
                {/* filters out the elements with index of more than 4 */}
                {items.filter((item, idx) => idx < 4).map((item) => <CollectionItem key = {item.id} item = {item}/>)}
            </div>

        </div>
    )
}

export default CollectionList