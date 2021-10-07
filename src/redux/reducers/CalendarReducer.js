
import {CalendarConstant} from '../config/constant';
const initialState = {
    schedule:[]
};

const calendar = (state = initialState, action) => {
    switch (action.type) {
        case CalendarConstant.GET_DATA_SCHEDULE: {
            const schedule = action.payload;
            return {
                ...state,
                schedule:schedule
            }
        }
        default: return { ...state };
    }
};

export default calendar;
