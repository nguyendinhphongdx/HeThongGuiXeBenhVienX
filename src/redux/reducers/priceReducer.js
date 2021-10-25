
import {PriceConstant} from '../config/constant';
const initialState = {
    prices:[]
};
const price = (state = initialState, action) => {
    switch(action.type){
        case PriceConstant.GET_DATA_PRICE: {
            const { payload } = action; // list item
            return {
                ...state,
                prices: payload
            };
        }
        case PriceConstant.ADD_PRICE: {
            const { payload } = action; // item addd
            const _newList = [...state.prices];
            _newList.push(payload);
            return {
                ...state,
                prices: _newList
            };
        }
        default: return {...state}
    }
};
export default price;
