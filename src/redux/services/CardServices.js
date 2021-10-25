import { message } from "antd";
import sendRequest from "../../axios/requestAPI";
import converter from "../../helpers/converter";
import cardActions from "../actions/cardActions";
const key = "updatable";
class CardServices {
    async GetDataCard(dispatch) {
    message.loading({ content: "Đang xử lý...", key });
    const request = await sendRequest("/card/queryAll", "get")
      .then(response => {
        const action = cardActions.Get_All_Card(converter.convertCard(response.data || []));
        dispatch(action);
        message.destroy();
        return response.data;
      })
      .catch(error => {
        console.log(error);
        message.warning({ content: "Fetch Lỗi.", key });
      });
    return request;
  }
  async Add_Card_Service(dispatch, data) {
    message.loading({ content: "Đang xử lý...", key });
    const request = await sendRequest("/card/addCard", "post", data)
      .then(response => {
        const action = cardActions.Add_Card(response.data);
        dispatch(action);
        return response.data;
      })
      .catch(error => {
        console.log(error.response);
        if (error.response.status === 400) {
          message.error({ content: `${"Email is exitst"}`, key });
        } else {
          message.warning({ content: "Thêm Lỗi.", key });
        }
      });
    return request;
  }
}
export default new CardServices();
