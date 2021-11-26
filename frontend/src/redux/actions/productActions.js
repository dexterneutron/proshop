import axios from "axios"

import { PRODUCT_LIST_FAIL, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_REQUEST } from "../constants/productConstans"


const listProducts =  ()=> async (dispatch) => {

    try {
        dispatch({type: PRODUCT_LIST_REQUEST})
        const { data } = await axios.get('api/products/')
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.reponse && error.reponse.data.message
                ? error.reponse.data.message
                : error.message,
        })
    }
        
    
}

export default listProducts