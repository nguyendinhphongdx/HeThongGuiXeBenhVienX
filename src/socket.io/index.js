import { message } from "antd";
import io from "socket.io-client";
import { SERVER_NODE } from "../axios/configAPI";

class SocketInstant {
    constructor(){
        this.socket = null;
    }
    initiateSocket = (room,userId) => {
        this.socket = io(SERVER_NODE,{
          auth:{userId:userId}
        });
        message.info(`reconnect socket ...`);
        console.log("init socket", this.socket);
        if (this.socket && room) this.socket.emit("join", room);
    };
  disconnectSocket = () => {
    message.info(`disconnect socket ...`);
    if (this.socket) this.socket.disconnect();
  };
  subscribeToChat = cb => {
    if (!this.socket) return true;
    this.socket.on("chat", msg => {
      console.log("Websocket event received!");
      return cb(null, msg);
    });
  };
  sendNotification = message => {
    if (this.socket) this.socket.emit("change_schedule", { message });
  };
  sendMessage = message => {
    if (this.socket) this.socket.emit("send-message", { message });
  };
}
export default new SocketInstant();

