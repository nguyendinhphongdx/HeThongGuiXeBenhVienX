import { message } from "antd";
import sendRequest from "../../axios/requestAPI";
import converter from "../../helpers/converter";
import priceActions from "../actions/priceActions";
const key = "updatable";
class PriceServices {
  async GetAllPrices(dispatch) {
    const request = await sendRequest("/price/queryAll", "get")
      .then(response => {
        const action = priceActions.Get_All_Prices(converter.convertPrice(response.data || []));
        dispatch(action);
      })
      .catch(error => {
        console.log(error);
      });
    return request;
  }
  async AddPrice(dispatch,price) {
    const request = await sendRequest("/price/addPrice", "post",price)
      .then(response => {
        const action = priceActions.Add_Price(response.data);
        dispatch(action);
       
      })
      .catch(error => {
        console.log(error);
      });
    return request;
  }

}
export default new PriceServices();
