import Axios from 'axios';
import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from '../constants/productConstant';

export const listProducts = () => async (dispatch) =>{

    dispatch({
        type: PRODUCT_LIST_REQUEST
    });

    try {
        
        const { data } = await Axios.get('/api/product');

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
    }

}

export const listProduct = (productId) => async(dispatch) =>{

    dispatch({
        type: PRODUCT_DETAILS_REQUEST,
        payload: productId
    });

    try {    

        const { data } = await Axios.get(`/api/product/${productId}`);

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data
        });

    } catch (error) {
        
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });

    }

}