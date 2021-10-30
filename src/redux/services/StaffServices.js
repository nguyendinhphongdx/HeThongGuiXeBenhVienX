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
    async UpdateStaff(dispatch,body){
        const request = await sendRequest('/user/updateUser','post',body)
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
            message.warning({ content: 'Cập nhật lỗi.', key });
        })
        return request
    }
    async AddStaff(dispatch,body){
        const request = await sendRequest('/user/addUser','post',body)
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
    async GetDataAccount(dispatch){
        const request = await sendRequest('/account/queryAll','get')
        .then(response =>{
            if(response.status == 200){ 
                const action = staffActions.QueryAll_Account(response.data || [])
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
}
export default new StaffServices();