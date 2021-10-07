import { message } from 'antd';
import sendRequest from '../../axios/requestAPI';
import HistoryActions from '../actions/historyActions';
import Converter from '../../helpers/converter';
class HistoryServices{
    GetDataHistory = async (dispatch) => {
        const result = await sendRequest('/history/histories', 'get')
        .then(response => {
            if(response.status == 200){
                const action = HistoryActions.GetAllHistory(response.data || []);
                dispatch(action);
                return response.data
            }else{
                throw new Error(response.message);
            }
        })
        .catch((error) => {
            message.error({content:error.message,key:'updatable'});
            //  openSuccessNotif('Thông báo', error.message, 2000, 'error');
        });
    return result;
      }  
}
export default new HistoryServices();