import React from 'react';
import CollectionOverview from '../../Components/Collection/CollectionOverview/CollectionOverview'
import { Route} from 'react-router-dom'
import CategoryPage from '../../Pages/CategoryPage/CategoryPage'
// Parent is App and Header, Display container of each shopping item 

function ShopPage(props) {
    const { match } = props
    return (
        <div className='shopPage'>
            {/* render the collection overview when /shop */}
            <Route exact path={`${match.path}`} render={() => <CollectionOverview />} />
            {/* renders the category page when /shop/hats /shop/sneakers etc  */}
            <Route path={`${match.path}/:collectionId`} render ={(props) => <CategoryPage {...props}/>}/>
          
        </div>
    )
}



export default (ShopPage);