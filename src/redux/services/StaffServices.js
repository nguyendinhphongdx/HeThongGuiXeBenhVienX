import { message } from "antd";
import sendRequest from "../../axios/requestAPI";
import converter from "../../helpers/converter";
import staffActions from "../actions/staffActions";
const key='updatable'
class StaffServices{
    async GetDataStaff(dispatch){
        const request = await sendRequest('/user/queryAll','get')
        .then(response =>{
            
            if(response.status == 200){ 
                const action = staffActions.Get_All_Staff(converter.convertUsers(response.data || []))
                dispatch(action);
                return 'success'
            }else{
                throw new Error(response.message);
            }
        })
        .catch((error) =>{
            console.log(error);
        })
        return request
    }
    async UpdateDataStaff(dispatch,body){
        message.loading({ content: 'Đang xử lý...', key });
        const request = await sendRequest('/user/updateUser','post',body)
        .then(response =>{
            if(response.status == 200){
                const action = staffActions.Update_Staff(response.data[0])
                dispatch(action);
                return 'success'
            }else{
                throw new Error(response.message);
            }
        })
        .catch((error) =>{
            console.log(error);
            message.warning({ content: 'Cập nhật lỗi.', key });
        })
        return request
    }
    async DeleteDataStaff(dispatch,body){
        message.loading({ content: 'Đang xử lý... ', key });
        const request = await sendRequest('/user/deleteUser','post',body)
        .then(response =>{
            if(response.status == 200){
               
                 return 'success'
            }else{
                throw new Error(response.message);
            }
        })
        .catch((error) =>{
            console.log(error);
            message.warning({ content: 'Xóa Lớp lỗi.', key });
        })
        return request
    }
    async AddClass(dispatch,body){
        message.loading({ content: 'Đang xử lý... ', key });
        const request = await sendRequest('/class/add_class','post',body)
        .then(response =>{
            if(response.status == 200){
            
                return 'success'
            }else{
                throw new Error(response.message);
            }
        })
        .catch((error) =>{
            console.log(error);
            message.warning({ content: 'Thêm Lớp lỗi.', key });
        })
        return request
    }
}
export default new StaffServices();