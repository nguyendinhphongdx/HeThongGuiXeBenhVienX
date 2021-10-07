import { store } from 'react-notifications-component';
export const openSuccessNotif=(title, message,duration,type)=>{
    store.addNotification({
        id: message,
        title: title ||"Wonderful!",
        message: message|| "teodosii@react-notifications-component",
        type: type||"success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: duration||5000,
          onScreen: true
        }
      });
}
export const openTypeNotif=(title, message,duration,type)=>{
  store.addNotification({
      id: message,
      title: title ||"Wonderful!",
      message: message|| "teodosii@react-notifications-component",
      type: type|| "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: duration||5000,
        onScreen: true
      }
    });
}
export const clearNotif=(id)=>{
    store.removeNotification(id);
}