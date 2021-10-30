import { message } from 'antd';
import {StaffConstant} from '../config/constant';
const initialState={
    staffs: [],
    accounts:[]
}
const key='updatable'
const staff =(state = initialState, action)=>{
    switch(action.type){
        case StaffConstant.GET_DATA_STAFF: {
            const { payload } = action; // list item
            message.success({ content: 'Fetch danh sách nhân viên thành công !', key, duration: 2 });
            return {
                ...state,
                staffs: payload
            };
        }
        case StaffConstant.ADD_STAFF: {
            const { payload } = action; // item addd
            const _newList = [...state.staffs];
            _newList.push(payload);
            message.success({ content: 'Thêm nhân viên thành công !', key, duration: 2 });
            return {
                ...state,
                staffs: _newList
            };
        }
        case StaffConstant.QUERY_ACCOUNT:{
            const { payload } = action; // item addd
            return {
                ...state,
                accounts: payload
            };
        }
        default: return {...state}
    }
}
export default staff;