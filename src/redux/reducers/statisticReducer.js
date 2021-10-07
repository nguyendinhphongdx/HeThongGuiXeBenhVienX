
import {DashboardCountConstants} from '../config/constant';
const initialState = {
   statistic:[],
   featuredNews:[],
   attackWeb:[],
   operationSystem:[],
   vulnerability:[],
   warning:[],
   violate:[]
};

const statistic = (state = initialState, action) => {
    switch (action.type) {
        case DashboardCountConstants.COLLECTION_LOGS: {
            const countAll = action.payload;
            return {
                ...state,
                attackWeb:countAll.attack,
                violate:countAll.violate,
                warning:countAll.warnning,
                vulnerability:countAll.vulnerability,
                operationSystem:countAll.os
            }
        }
        case DashboardCountConstants.GENERAL: {
            const statis = action.payload;
            return {
                ...state,
                statistic:statis
            }
        }
        default: return { ...state };
    }
};

export default statistic;
