import { message } from "antd";
import sendRequest from "../../axios/requestAPI";
import documentActions from "../actions/";
const key = "updatable";
class TicketServices {
    async AddTicketServices(dispatch, body) {
    const form = new FormData();
    form.append("file", body.file);
    form.append("title", body.title);
    form.append("description", body.description);
    form.append("_idSubject", body._idSubject);
    form.append("_idAuth", body._idAuth);
    form.append("status", body.status ? "actived" : "blocked");
    message.loading({ content: "Đang xử lý...", key });
    const request = await sendRequest("/document/upload", "post", form)
      .then(response => {
        const action = documentActions.Add_Document(response.data[0]);
        dispatch(action);
        return response.data;
      })
      .catch(error => {
        console.log(error);
        if (error.response) {
          message.warning({ content: error.response.data.message, key });
        } else {
          message.warning({ content: "Thêm Lỗi.", key });
        }
      });
    return request;
  }

  async GetDataDocument(dispatch) {
    message.loading({ content: "Đang xử lý...", key });
    const request = await sendRequest("/document/documents", "get")
      .then(response => {
        const action = documentActions.Get_All_Document(response.data);
        dispatch(action);
        return response.data;
      })
      .catch(error => {
        console.log(error);
        message.warning({ content: "Fetch Lỗi.", key });
      });
    return request;
  }
}
export default new TicketServices();
