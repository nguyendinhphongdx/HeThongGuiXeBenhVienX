import {MessageConstant} from '../config/constant';
class MessageActions{
    Get_All_Message=(messages) => {
        return {
           type: MessageConstant.GET_DATA_MESSAGE,
           payload: messages
       }
   }
   Chat_Add_Message=(message) => {
    return {
       type: MessageConstant.ADD_MESSAGE,
       payload: message
   }
}
}
export default new MessageActions();