
import { message } from 'antd';
import {ClassConstant} from '../config/constant';
const initialState = {
    classes:[],
    chart:[],
    schedule:[]
};
const key='updatable'

const _class = (state = initialState, action) => {
    switch(action.type){
        case ClassConstant.GET_ALL_CLASS: {
            const { payload } = action; // list item
            return {
                ...state,
                classes: payload
            };
        }
        case ClassConstant.ADD_CLASS: {
            const { payload } = action; // item addd
            const _newList = [...state.classes];
            _newList.push(payload);
            message.success({ content: 'Thêm Class thành công !', key, duration: 2 });
            return {
                ...state,
                classes: _newList
            };
        }
        case ClassConstant.UPDATE_CLASS: {
            const { payload } = action; // item update
            let classes = [...state.classes];
           const new_classes = classes.map(item => {
               if(item._id===payload._id){
                    return payload;
               } else return item;
           })
           message.success({ content: 'Cập nhật lớp thành công!', key, duration: 2 });
           
            return {
                ...state,
                classes: new_classes
            };
        }
        case ClassConstant.REMOVE_CLASS: {
            const { payload } = action; // item remoce
            let classes = [...state.classes];
            const _newClass = classes.filter(item => item._id !== payload);
           message.success({ content: 'Xóa lớp thành công!', key, duration: 2 });
            return {
                ...state,
                classes: _newClass
            };
        }
        case ClassConstant.GET_DATA_CHART: {
            const { payload } = action; // arr
            return {
                ...state,
                chart: payload
            };
        }
        default: return {...state}
    }
};

export default _class;
