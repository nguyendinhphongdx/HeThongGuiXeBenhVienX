
import {RoleConstant} from '../config/constant';
const initialState = {
    roles:[]
};
const role = (state = initialState, action) => {
    switch(action.type){
        case RoleConstant.GET_DATA_ROLE: {
            const { payload } = action; // list item
            return {
                ...state,
                roles: payload
            };
        }
        case RoleConstant.ADD_ROLE: {
            const { payload } = action; // item addd
            const _newList = [...state.roles];
            _newList.push(payload);
            return {
                ...state,
                roles: _newList
            };
        }
        default: return {...state}
    }
};
export default role;
