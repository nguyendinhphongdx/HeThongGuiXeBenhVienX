
import {TicketConstant} from '../config/constant';
const initialState = {
    tickets:[]
};

const ticket = (state = initialState, action) => {
    switch (action.type) {
        case TicketConstant.GET_DATA_TICKET: {
            const tickets = action.payload;
            return {
                ...state,
                tickets:tickets
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
