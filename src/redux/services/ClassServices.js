import { message } from "antd";
import sendRequest from "../../axios/requestAPI";
import helpers from "../../helpers/helpers";
import classActions from "../actions/classActions";
const key='updatable'
class ClassServices{
    async GetDataClass(dispatch){
        const request = await sendRequest('/class/classes','get')
        .then(response =>{
            if(response.status == 200){
                const action = classActions.Get_All_Class(response.data || [])
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
    async UpdateDataClass(dispatch,body){
        message.loading({ content: 'Đang xử lý...', key });
        const request = await sendRequest('/class/update_class','post',body)
        .then(response =>{
            if(response.status == 200){
                const action = classActions.Update_Class(response.data[0])
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
    async DeleteDataClass(dispatch,body){
        message.loading({ content: 'Đang xử lý... ', key });
        const request = await sendRequest('/class/remove_class','post',body)
        .then(response =>{
            if(response.status == 200){
                const action = classActions.Remove_Class(body._id)
                dispatch(action);
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
        // {
        //     "name":"1910A06",
        //     "schedule1":"4",
        //     "schedule2":"5",
        //     "_idProfessor":"604648950cc6fc4ec604dd8a",
        //     "_idSubject":"604648020cc6fc4ec604dd88"
        // }
        message.loading({ content: 'Đang xử lý... ', key });
        const request = await sendRequest('/class/add_class','post',body)
        .then(response =>{
            if(response.status == 200){
                const action = classActions.Add_Class(response.data[0])
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
    async AddStudentsToClass(dispatch,body){
        // {
        //     "_idStudents":[
        //         "6046430f0cc6fc4ec604dd7e","6046438b0cc6fc4ec604dd80"
        //     ],
        //     "_id":"60464aab459f7b4cfe85bae2"
        // }
        message.loading({ content: 'Đang xử lý... ', key });
        const request = await sendRequest('/class/add_member','post',body)
        .then(response =>{
            if(response.status == 200){
                const action = classActions.Update_Class(response.data[0])
                dispatch(action);
                 return 'success'
            }else{
                throw new Error(response.message);
            }
        })
        .catch((error) =>{
            console.log(error);
            message.warning({ content: 'Thêm sinh viên lỗi Lớp lỗi.', key });
        })
        return request
    }
    async GetDataChartClass(dispatch){
        const request = await sendRequest('/class/compare_class','get')
        .then(response =>{
            console.log(response);
            if(response && response.status == 200){
                const action = classActions.Get_Data_Chart(helpers.cutChartData(response.data));
                dispatch(action);
                return helpers.cutChartData(response.data);
            }else{
                throw new Error(response.message);
            }
        })
        .catch((error) =>{
            console.log(error);
            message.warning({ content: 'Không thể lấy biểu đồ.', key });
        })
        return request
    }
}
export default new ClassServices();