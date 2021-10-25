import { message } from "antd";
import sendRequest from "../../axios/requestAPI";
import converter from "../../helpers/converter";
import locationActions from "../actions/locationActions";
const key='updatable'
class LocationServices{
    async GetDataLocation(dispatch){
        message.loading({ content: 'Đang xử lý...', key });
        const request = await sendRequest('/location/queryAll','get')
        .then(response =>{
            if(response.status == 200){
                const action = locationActions.Get_All_Location(converter.convertLocation(response.data) || [])
                dispatch(action);
                return 'success'
            }else{
                throw new Error(response.message);
            }
        })
        .catch((error) =>{
            console.log(error);
            message.warning({ content: 'Fetch Lỗi Class.', key });
        })
        return request
    }
    async AddProfessor(dispatch,data){
        message.loading({ content: 'Đang xử lý...', key });
        const form = new FormData();
        form.append('file',data.file);
        form.append('name',data.name);
        form.append('description',data.description);
        form.append('password',data.password);
        form.append('age',`${data.age}`);
        form.append('status',data.status?'actived':'blocked');
        form.append('email',data.email);
        const request = await sendRequest('/professor/add_professo','post',form)
        .then(response =>{
            if(response.status == 200){
                const action = locationActions.Add_Location(response.data[0])
                dispatch(action);
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
    async AddLocation(dispatch,data){
        message.loading({ content: 'Đang xử lý... ', key });
        const request = await sendRequest('/location/addLocation','post')
        .then(response =>{
            if(response.status == 200){
                const action = locationActions.Add_Location(response.data)
                dispatch(action);
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
export default new LocationServices();