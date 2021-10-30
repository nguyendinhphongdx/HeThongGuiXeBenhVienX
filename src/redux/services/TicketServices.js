import { message } from "antd";
import sendRequest from "../../axios/requestAPI";
import converter from "../../helpers/converter";
import helpers from "../../helpers/helpers";
import cardActions from "../actions/cardActions";
import TicketAction from "../actions/ticketActions";
const key = "updatable";
class TicketServices {
  async AddTicketServices(dispatch, body) {
    message.loading({ content: "Đang xử lý...", key });
    const request = await sendRequest("/ticket/addTicket", "post", body)
      .then(response => {
        const action = TicketAction.Get_All_Ticket(
          converter.convertTicket(response.data)
        );
        dispatch(action);
        return response.data;
      })
      .catch(error => {
        if (error.response) {
          console.log(error);
          message.warning({ content: "Thêm Lỗi.", key });
        } else {
          message.warning("Thêm Lỗi.");
        }
      });
    return request;
  }
  async UpdateTicketServices(dispatch, body) {
    message.loading({ content: "Đang xử lý...", key });
    const request = await sendRequest("/ticket/updateTicket", "post", body)
      .then(response => {
        const action = TicketAction.Get_All_Ticket(
          converter.convertTicket(response.data)
        );
        dispatch(action);
        return response.data;
      })
      .catch(error => {
        message.warning("Cập nhật Lỗi.");
      });
    return request;
  }
  async ReturnTicketServices(dispatch, body) {
    const request = await sendRequest("/ticket/returnTicket", "post", body)
      .then(response => {
        const action = cardActions.Get_All_Card(converter.convertCard(response.data || []));
        dispatch(action);
        return response.data;
      })
      .catch(error => {
        message.warning("Cập nhật Lỗi.");
      });
    return request;
  }
  async GetDataTicket(dispatch) {
    message.loading({ content: "Đang xử lý...", key });
    const request = await sendRequest("/ticket/queryAll", "get")
      .then(response => {
        const action = TicketAction.Get_All_Ticket(
          converter.convertTicket(response.data)
        );
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
        const action = TicketAction.Get_Types(
          converter.convertChartAnalysType(convert)
        );
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
