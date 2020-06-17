import React, { Component } from 'react';
import SHOP_DATA from '../../Pages/ShopPage/ShopData'
import CollectionList from '../../Components/CollectionList/CollectionList'

// Parent is App and Header, Display container of each shopping item 
class ShopPage extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='shopPage'>
                {
                    SHOP_DATA.map(({id, ...otherShopDataProps}) => 
                    <CollectionList key = {id} {...otherShopDataProps}/>)
                }
            </div>
        )
    }


}

export default ShopPage;