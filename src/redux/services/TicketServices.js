import { message } from "antd";
import sendRequest from "../../axios/requestAPI";
import converter from "../../helpers/converter";
import helpers from "../../helpers/helpers";
import TicketAction  from "../actions/ticketActions";
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
        const action = TicketAction.Add_Ticket(response.data[0]);
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

  async GetDataTicket(dispatch) {
    message.loading({ content: "Đang xử lý...", key });
    const request = await sendRequest("/ticket/queryAll", "get")
      .then(response => {
        const action = TicketAction.Get_All_Ticket(converter.convertTicket(response.data));
        dispatch(action);
        return response.data;
      })
      .catch(error => {
        console.log(error);
        message.warning({ content: "Fetch Lỗi.", key });
      });
    return request;
  }
  async GetDataType(dispatch) {
    const request = await sendRequest("/ticket/analysis", "get")
      .then(response => {
        const convert = helpers.countPercentType(response.data);
        const action = TicketAction.Get_Types(converter.convertChartAnalysType(convert));
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
