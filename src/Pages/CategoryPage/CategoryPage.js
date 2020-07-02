import React from 'react'
import CollectionItem from '../../Components/Collection/CollectionItem/CollectionItem'
import { connect } from 'react-redux'
import {selectCollectionCategory } from '../../redux/shop/shop.selector'
import './CategoryPage.scss'
function CategoryPage(props) {
    const {match} = props
    let items = props.category.items
    let title = props.category.title
    console.log(items)
    return (
        <div className='category-page'>
            <h2 className = 'title'>{title}</h2>
            <div className='items'>
                {items.map(item =>
                    <CollectionItem key={item.id} item={item} />)}
            </div>
        </div>
    )
}

function mapStateToProps(state, ownProps) {

    return {
        // curried function that accepts the category url name and the state 
        category: selectCollectionCategory(ownProps.match.params.collectionId)(state)
    }
}

export default connect(mapStateToProps)(CategoryPage)