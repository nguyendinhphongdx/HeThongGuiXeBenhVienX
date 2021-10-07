import { LAYOUTCONSTANTS  } from '../config/constant';
const initialState = {
    sidebarShow: 'responsive',
    loading:false
  }
  
  const changeState = (state = initialState, { type, payload, ...rest }) => {
    switch (type) {
      case 'set':
        return {...state, ...rest }
      case LAYOUTCONSTANTS.LOADING:{
        return {
          ...state,
          loading:payload
        }
      }
      default:
        return state
    }
  }

  export default changeState;