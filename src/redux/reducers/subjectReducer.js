import { message } from 'antd';
import {SubjectConstant} from '../config/constant';
const initialState={
    subjects:[]
}
const key='updatable'
const subject =(state = initialState, action)=>{
    switch(action.type){
        case SubjectConstant.GET_ALL_SUBJECT: {
            const { payload } = action; // list item
            message.success({ content: 'Fetch danh sách Subject thành công !', key, duration: 2 });
            return {
                ...state,
                subjects: payload
            };
        }
        case SubjectConstant.ADD_SUBJECT: {
            const { payload } = action; // item addd
            const _newList = [...state.subjects];
            _newList.push(payload);
            message.success({ content: 'Thêm Subject thành công !', key, duration: 2 });
            return {
                ...state,
                subjects: _newList
            };
        }
        case SubjectConstant.UPDATE_SUBJECT: {
            const { payload } = action; // item update
            let subjects = [...state.subjects];
           const new_subjects = subjects.map(item => {
               if(item._id===payload._id){
                    return payload;
               } else return item;
           })
           message.success({ content: 'Cập nhật Môn thành công!', key, duration: 2 });
            return {
                ...state,
                subjects: new_subjects
            };
        }
        case SubjectConstant.REMOVE_SUBJECT: {
            const { payload } = action; // item remoce
            let subjects = [...state.subjects];
            const _newList = subjects.filter(item => item._id !== payload._id);
           message.success({ content: 'Xóa Môn thành công!', key, duration: 2 });
            return {
                ...state,
                subjects: _newList
            };
        }
        default: return {...state}
    }
}
export default subject;