import { message } from "antd";
import sendRequest from "../../axios/requestAPI";
import socketIo from "../../socket.io";
import MessageActions from "../actions/messageActions";
const key = "updatable";
class MessageServices {
  async GetAllMessage(dispatch,body) {
    //message.loading({ content: "Đang xử lý...", key });
   
    const request = await sendRequest("/chat/queryAll", "post",body)
      .then(response => {
        const action = MessageActions.Get_All_Message(response.data);
        dispatch(action);
        return message;
      })
      .catch(error => {
        console.log(error);
      });
    return request;
  }
  async ChatAddMessage(dispatch,message) {
  socketIo.sendMessage({message})
    const request = await sendRequest("/chat/write-message", "post",message)
      .then(response => {
        const action = MessageActions.Get_All_Message(response.data);
        dispatch(action);
        return message;
      })
      .catch(error => {
        console.log(error);
      });
    return request;
  }

}
export default new MessageServices();
