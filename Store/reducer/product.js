import PRODUCTS from "../../data/dummy-data"

const initialState= {
    availbleProduct:PRODUCTS,
    userProduct:PRODUCTS.filter(prod => prod.ownerid ==='u1')
}

export default (state = initialState,action) =>{
    return state
}