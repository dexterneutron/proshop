import {
    PRODUCT_LIST_FAIL, 
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_REQUEST,
    PRODUCT_DETAIL_FAIL,
    PRODUCT_DETAIL_SUCCESS,
    PRODUCT_DETAIL_REQUEST
    } from "../constants/productConstans"

const PRODUCTS_INITIAL_STATE = { products:[] }
export const productListReducer = (state = PRODUCTS_INITIAL_STATE, action) =>{

    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading:true, products:[] } 
        
        case PRODUCT_LIST_SUCCESS:
            return { loading:false, products: action.payload }
        
        case PRODUCT_LIST_FAIL:
                return { loading:false, error: action.payload }
        default:
            return state
    }
}

const PRODUCT_DETAIL_INITIAL_STATE = { product: {reviews:[]} }
export const productDetailsReducer = (state = PRODUCT_DETAIL_INITIAL_STATE, action) =>{
    switch (action.type) {
        case PRODUCT_DETAIL_REQUEST:
            return { loading:true, ...state }
        
        case PRODUCT_DETAIL_SUCCESS:
            return { loading:false, product: action.payload }
        
        case PRODUCT_DETAIL_FAIL:
                return { loading:false, error: action.payload }
        default:
            return state
    }
}