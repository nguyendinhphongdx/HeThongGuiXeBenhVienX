import { message } from 'antd';
import {DocumentConstant} from '../config/constant';
const initialState={
    documents: [],
}
const key='updatable'
const document =(state = initialState, action)=>{
    switch(action.type){
        case DocumentConstant.GET_ALL_DOCUMENT: {
            const { payload } = action; // list item
            console.log(payload);
            message.success({ content: 'Fetch danh sách Tài Liệu thành công !', key, duration: 2 });
            return {
                ...state,
                documents: payload
            };
        }
        case DocumentConstant.ADD_DOCUMENT: {
            const { payload } = action; // item addd
            console.log(action);
            const _newList = [...state.documents];
            _newList.push(payload);
            message.success({ content: 'Thêm Tài Liệu thành công !', key, duration: 2 });
            return {
                ...state,
                documents: _newList
            };
        }
        case DocumentConstant.UPDATE_DOCUMENT: {
            const { payload } = action; // item update
            let documents = [...state.documents];
           const new_documents= documents.map(item => {
               if(item._id===payload._id){
                    return payload;
               } else return item;
           })
           message.success({ content: 'Cập nhật Tài Liệu thành công!', key, duration: 2 });
           
            return {
                ...state,
                documents: new_documents
            };
        }
        case DocumentConstant.REMOVE_DOCUMENT: {
            const { payload } = action; // item remoce
            let documents = [...state.documents];
            const _newDocuments = documents.filter(item => item._id !== payload);
           message.success({ content: 'Xóa Tài Liệu thành công!', key, duration: 2 });
            return {
                ...state,
                documents: _newDocuments
            };
        }
        default: return {...state}
    }
}
export default document;