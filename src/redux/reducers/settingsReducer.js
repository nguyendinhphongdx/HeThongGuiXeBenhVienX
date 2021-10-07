import {SettingsConstants} from '../config/constant';

const initialState = {
    fileConfig:null
};

const settings = (state = initialState, action) => {
    switch (action.type) {
        case SettingsConstants.CONFIG:{
            const fileConfig = action.payload;
            return {
                ...state,
                fileConfig
            }
        }
        default: return { ...state };
    }
};

export default settings;
