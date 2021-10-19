
import {CardConstant} from '../config/constant';
const initialState = {
    cards:[]
};

const card = (state = initialState, action) => {
    switch (action.type) {
        case CardConstant.GET_DATA_CARD: {
            const cards = action.payload;
            return {
                ...state,
                cards:cards
            }
        }
        case CardConstant.ADD_CARD: {
            const card = action.payload;
            return {
                ...state,
                cards:[...state.cards,card]
            }
        }
        default: return { ...state };
    }
};

export default card;
