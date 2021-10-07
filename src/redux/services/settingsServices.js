import { message } from "antd";
import sendRequest from "../../axios/requestAPI";
import SettingsActions from "../actions/settingsActions";
import Converter from "../../helpers/converter";
import { openSuccessNotif } from "../../views/notifications/notif/notifStore";
class SettingsServices {
  QueryConfig = async dispatch => {
    const result = await sendRequest("/settings/config", "get")
      .then(response => {
        if (response.status == 200) {
          const action = SettingsActions.GetConfig(
            Converter.convertConfigFile(response.data || [])
          );
          dispatch(action);
          return response.data;
        } else {
          throw new Error(response.message);
        }
      })
      .catch(error => {
        console.log(error);
        // openSuccessNotif("Thông báo", error.message, 2000, "error");
      });
    return result;
  };
  UpdateConfig= async (config,dispatch) =>{
    const result = await sendRequest("/settings/config", "put",config)
    .then(response => {
      if (response.status == 200) {
        const action = SettingsActions.GetConfig(
          Converter.convertConfigFile(response.data || [])
        );
        dispatch(action);
        return response.data;
      } else {
        throw new Error(response.message);
      }
    })
    .catch(error => {
      console.log(error);
      openSuccessNotif("Thông báo", error.message, 2000, "error");
    });
  return result;
  }
}
export default new SettingsServices();
