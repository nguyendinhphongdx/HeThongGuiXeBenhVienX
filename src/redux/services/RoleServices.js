import { message } from "antd";
import sendRequest from "../../axios/requestAPI";
import RoleActions from "../actions/roleActions";
const key = "updatable";
class RoleServices {
  async GetAllRoles(dispatch) {
    const request = await sendRequest("/role/queryAll", "get")
      .then(response => {
        const action = RoleActions.Get_All_Roles(response.data || []);
        dispatch(action);
      })
      .catch(error => {
        console.log(error);
      });
    return request;
  }

}
export default new RoleServices();
