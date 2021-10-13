import { store } from "react-notifications-component";

class StoreNoti {
  openSuccessNotif = (title, message, duration, type) => {
    store.addNotification({
      id: message,
      title: title || "Wonderful!",
      message: message || "teodosii@react-notifications-component",
      type: type || "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: duration || 5000,
        onScreen: true,
      },
    });
  };
  openTypeNotif = (title, message, duration, type) => {
    store.addNotification({
      id: message,
      title: title || "Wonderful!",
      message: message || "teodosii@react-notifications-component",
      type: type || "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: duration || 5000,
        onScreen: true,
      },
    });
  };
  clearNotif = id => {
    store.removeNotification(id);
  };
}
export default new StoreNoti();
