import { message } from 'antd';
import {StudentConstant} from '../config/constant';
const initialState={
    students:[]
}
const key='updatable'
const student =(state = initialState, action)=>{
    switch(action.type){
        case StudentConstant.GET_ALL_STUDENT: {
            const { payload } = action; // list item
            // message.success({ content: 'Fetch danh sách Sinh Viên thành công !', key, duration: 2 });
            return {
                ...state,
                students: payload
            };
        }
        case StudentConstant.ADD_STUDENT: {
            const { payload } = action; // item addd
            const _newList = [...state.students];
            _newList.push(payload);
            message.success({ content: 'Thêm Sinh Viên thành công !', key, duration: 2 });
            return {
                ...state,
                students: _newList
            };
        }
        case StudentConstant.UPDATE_STUDENT: {
            const { payload } = action; // item update
            let students = [...state.students];
           const new_list = students.map(item => {
               if(item._id===payload._id){
                    return payload;
               } else return item;
           })
           message.success({ content: 'Cập nhật Sinh Viên thành công!', key, duration: 2 });
            return {
                ...state,
                students: new_list
            };
        }
        case StudentConstant.REMOVE_STUDENT: {
            const { payload } = action; // item remoce
            let students = [...state.students];
            const _newList = students.filter(item => item._id !== payload._id);
           message.success({ content: 'Xóa Sinh Viên thành công!', key, duration: 2 });
            return {
                ...state,
                students: _newList
            };
        }
        case StudentConstant.CHANGE_AVATAR_PROFESSOR: {
            const { payload } = action; // name iamge
            let students = [...state.students];
            const new_students = students.map(item => {
                if(item._id===payload.idStudent){
                     return payload;
                } else return item;
            })
           message.success({ content: 'Đổi Avatar thành công!', key, duration: 2 });
            return {
                ...state,
                students: new_students
            };
        }
        default: return {...state}
    }
}
export default student;