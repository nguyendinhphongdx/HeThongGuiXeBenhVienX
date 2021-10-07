
import {HistoryConstant} from '../config/constant';
const initialState = {
    histories:[]
};

const history = (state = initialState, action) => {
    switch (action.type) {
        case HistoryConstant.GET_ALL_HISTORY: {
            const histories = action.payload;
            return {
                ...state,
                histories:histories
            }
        }
        default: return { ...state };
    }
};

export default history;
