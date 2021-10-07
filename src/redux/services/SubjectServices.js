import { message } from "antd";
import sendRequest from "../../axios/requestAPI";
import subjectActions from "../actions/subjectActions";

const key = "updatable";
class SubjectServices {
  async GetDataSubject(dispatch) {
    message.loading({ content: "Đang xử lý...", key });
    const request = await sendRequest("/subject/subjects", "get")
      .then(response => {
        const action = subjectActions.Get_All_Subject(response.data);
        dispatch(action);
        return response.data;
      })
      .catch(error => {
        console.log(error);
        message.warning({ content: "Fetch Lỗi.", key });
      });
    return request;
  }
  async AddSubjectService(dispatch, data) {
    message.loading({ content: "Đang xử lý...", key });
    const request = await sendRequest("/subject/add_subject", "post", data)
      .then(response => {
        const action = subjectActions.Add_Subject(response.data[0]);
        dispatch(action);
        return "success";
      })
      .catch(error => {
        console.log(error);
        message.warning({ content: "Tên đã tồn tại.", key });
      });
    return request;
  }
  async RemoveSubjectService(dispatch, data) {
    message.loading({ content: "Đang xử lý...", key });
    const body = { _id: data._id };
    const request = await sendRequest("/subject/remove_subject", "post", body)
      .then(response => {
        const action = subjectActions.Remove_Subject(response.data[0]);
        dispatch(action);
        return "success";
      })
      .catch(error => {
        console.log(error);
        message.warning({ content: "Xóa không thành công !", key });
      });
    return request;
  }
}
export default new SubjectServices();
