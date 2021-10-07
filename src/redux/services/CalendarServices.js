import { message } from 'antd';
import sendRequest from '../../axios/requestAPI';
import CalendarActions from '../actions/calandarActions';
import Converter from '../../helpers/converter';
import { openSuccessNotif } from '../../views/notifications/notif/notifStore';
class CalanderServices{
    GetDataSchedule = async (dispatch) => {
        const result = await sendRequest('/class/common_schedule', 'get')
        .then(response => {
            if(response.status == 200){
                const action = CalendarActions.Get_Data_Schedule(response.data || []);
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
export default new CalanderServices();