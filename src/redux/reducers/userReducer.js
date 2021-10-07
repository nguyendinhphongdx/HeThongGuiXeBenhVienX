import {UserConstants} from '../config/constant';

const initialState = {
    username: null,
    password: null,
    token:null,
    users:[]
};

const users = (state = initialState, action) => {
    switch (action.type) {
        case UserConstants.QUERY_ALL:{
            console.log(action.payload);
            return{
                ...state,
                users:action.payload
            }
        }
        default: return { ...state };
    }
};

export default users;
