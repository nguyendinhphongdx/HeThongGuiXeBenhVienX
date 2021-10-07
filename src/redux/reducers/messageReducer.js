import { message } from 'antd';
import {MessageConstant} from '../config/constant';
const initialState={
    messages: [],
}
const key='updatable'
const messages =(state = initialState, action)=>{
    switch(action.type){
        case MessageConstant.GET_DATA_MESSAGE: {
            const { payload } = action; // list item
            return {
                ...state,
                messages: payload
            };
        }
        case MessageConstant.ADD_MESSAGE: {
            const { payload } = action; // list item
            return {
                ...state,
                messages: [...state.messages,payload]
            };
        }
        default: return {...state}
    }
}
export default messages;