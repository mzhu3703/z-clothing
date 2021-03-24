import { createSelector } from 'reselect'

//state of shopdata is shopData: {SHOP_DATA: []}
const selectShop = (state) => state.shopData

// gets SHOP_DATA[]
export const selectCollection = createSelector(
    [selectShop], shopData => shopData.SHOP_DATA
)


export const selectCollectionsForPreview = createSelector(    
    // converts the shopdata that was an object to an array of objects to be able to map through 
    [selectCollection],SHOP_DATA => Object.keys(SHOP_DATA).map(key => SHOP_DATA[key])
)

export const selectCollectionCategory = (categoryUrlParam) => (createSelector
     // Shop_Data gets us the array of objects, find returns the array index we need that is equal to the Url parameter 
    ([selectCollection], SHOP_DATA => SHOP_DATA[categoryUrlParam]
))