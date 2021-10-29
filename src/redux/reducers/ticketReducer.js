
import { message } from 'antd';
import {TicketConstant} from '../config/constant';
const initialState = {
    tickets:[],
    analysisType:[]
};
const key = 'updatable';
const ticket = (state = initialState, action) => {
    switch (action.type) {
        case TicketConstant.GET_DATA_TICKET: {
            const tickets = action.payload;
        message.success({ content: "Lấy danh sách vé thẻ thành công",key });
            return {
                ...state,
                tickets:tickets
            }
        }
        case TicketConstant.GET_DATA_TYPE: {
            const analys = action.payload;
            return {
                ...state,
                analysisType:analys
            }
        }
        case TicketConstant.ADD_TICKET: {
            const ticket = action.payload;
            return {
                ...state,
                tickets:[...state.tickets,ticket]
            }
        }
        default: return { ...state };
    }
};

export default ticket;
