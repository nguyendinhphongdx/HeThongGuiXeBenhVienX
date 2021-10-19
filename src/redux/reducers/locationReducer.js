
import { message } from 'antd';
import {LocationConstant} from '../config/constant';
const initialState = {
    locations:[]
};
const key='updatable'

const location = (state = initialState, action) => {
    switch(action.type){
        case LocationConstant.GET_DATA_LOCATION: {
            const { payload } = action; // list item
            return {
                ...state,
                locations: payload
            };
        }
        case LocationConstant.ADD_LOCATION: {
            const { payload } = action; // item addd
            const _newList = [...state.locations];
            _newList.push(payload);
            return {
                ...state,
                locations: _newList
            };
        }
        default: return {...state}
    }
};

export default location;
