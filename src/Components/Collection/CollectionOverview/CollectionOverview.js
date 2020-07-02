import React from 'react'
import CollectionList from '../CollectionList/CollectionList'
import { connect } from 'react-redux'
import { selectCollectionsForPreview  } from '../../../redux/shop/shop.selector'


function CollectionOverview(props) {
    const collection = props.collection
  
    return (
        <div className='collection-overview'>
            {
                collection.map(({ id, ...otherShopDataProps }) =>
                    <CollectionList key={id} {...otherShopDataProps} />)
            }

        </div>
    )
}

function mapStateToProps(state) {
    return {
        collection: selectCollectionsForPreview (state),
    }
}

export default connect(mapStateToProps)(CollectionOverview);