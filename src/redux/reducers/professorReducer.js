
import { message } from 'antd';
import {ProfessorConstant} from '../config/constant';
const initialState = {
    professors:[]
};
const key='updatable'

const professor = (state = initialState, action) => {
    switch(action.type){
        case ProfessorConstant.GET_ALL_PROFESSOR: {
            const { payload } = action; // list item
            return {
                ...state,
                professors: payload
            };
        }
        case ProfessorConstant.ADD_PROFESSOR: {
            const { payload } = action; // item addd
            const _newList = [...state.professors];
            _newList.push(payload);
            message.success({ content: 'Thêm Giảng Viên thành công !', key, duration: 2 });
            return {
                ...state,
                professors: _newList
            };
        }
        case ProfessorConstant.UPDATE_PROFESSOR: {
            const { payload } = action; // item update
            let professors = [...state.professors];
           const new_professors = professors.map(item => {
               if(item._id===payload._id){
                    return payload;
               } else return item;
           })
           message.success({ content: 'Cập nhật Giảng Viên thành công!', key, duration: 2 });
            return {
                ...state,
                professors: new_professors
            };
        }
        case ProfessorConstant.REMOVE_PROFESSOR: {
            const { payload } = action; // item remoce
            let professors = [...state.professors];
            const _newProfessors = professors.filter(item => item._id !== payload._id);
           message.success({ content: 'Xóa Giảng Viên thành công!', key, duration: 2 });
            return {
                ...state,
                professors: _newProfessors
            };
        }
        case ProfessorConstant.CHANGE_AVATAR_PROFESSOR: {
            const { payload } = action; // name iamge
            let professors = [...state.professors];
            const new_professors = professors.map(item => {
                if(item._id===payload.idProfessor){
                     return payload;
                } else return item;
            })
           message.success({ content: 'Đổi Avatar thành công!', key, duration: 2 });
            return {
                ...state,
                professors: new_professors
            };
        }
        default: return {...state}
    }
};

export default professor;
