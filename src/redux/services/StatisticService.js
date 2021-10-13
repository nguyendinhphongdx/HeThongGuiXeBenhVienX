import { message } from 'antd';
import sendRequest from '../../axios/requestAPI';
import StatisticActions from '../actions/statisticActions';
import Converter from '../../helpers/converter';
import StoreNotif from '../../views/notifications/notif/notifStore';
class StatisticService{
    // dữ liệu thống kê chưa tổng hợp
    QueryCollectedLogs = async (dispatch) => {
        const result = await sendRequest('/mobile/networks/counts', 'get')
        .then(response => {
            if(response.status == 200){
                const action = StatisticActions.StatisticAllData(Converter.convertCountAllData(response.data || []));
                dispatch(action);
                return response.data
            }else{
                throw new Error(response.message);
            }
        })
        .catch((error) => {
            console.log(error);
            // StoreNotif.openSuccessNotif('Thông báo', error.message, 2000, 'error');
        });
    return result;
      }
      // Dữ liệu thống kê đã tổng hợp
    QueryGeneralCollectedLogs = async (dispatch) => {
        const result = await sendRequest('/mobile/networks/counts/home', 'get')
            .then(response => {
                if(response.status == 200){
                   
                    const action = StatisticActions.StatisticGeneralData(Converter.convertCountData(response.data || []));
                    dispatch(action);
                    return response.data
                }else{
                    throw new Error(response.message);
                }
            })
            .catch((error) => {
                console.log(error);
                // StoreNotif.openSuccessNotif('Thông báo', error.message, 2000, 'error');
            });
        return result;
    }
      
}
export default new StatisticService();