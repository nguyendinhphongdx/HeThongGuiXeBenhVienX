import { message } from "antd";
import sendRequest from "../../axios/requestAPI";
import studentActions from "../actions/ticketActions";
const key = "updatable";
class StudentServices {
    async GetDataStudent(dispatch) {
    message.loading({ content: "Đang xử lý...", key });
    const request = await sendRequest("/student/students", "get")
      .then(response => {
        const action = studentActions.Get_All_Student(response.data);
        dispatch(action);
        message.destroy();
        return response.data;
      })
      .catch(error => {
        console.log(error);
        message.warning({ content: "Fetch Lỗi.", key });
      });
    return request;
  }
  async Add_Student_Service(dispatch, data) {
    message.loading({ content: "Đang xử lý...", key });
    const form = new FormData();
    form.append("file", data.file);
    form.append("name", data.name);
    form.append("description", data.description);
    form.append("password", data.password);
    form.append("age", `${data.age}`);
    form.append("status", data.status ? "actived" : "blocked");
    form.append("email", data.email);
    const request = await sendRequest("/student/add_student", "post", form)
      .then(response => {
        const action = studentActions.Add_Student(response.data[0]);
        dispatch(action);
        return response.data;
      })
      .catch(error => {
        console.log(error.response);
        if (error.response.status === 400) {
          message.error({ content: `${"Email is exitst"}`, key });
        } else {
          message.warning({ content: "Thêm Lỗi.", key });
        }
      });
    return request;
  }
  async Delete_Student_Service(dispatch, body) {
    message.loading({ content: "Đang xử lý...", key });
    const request = await sendRequest("/student/remove_student", "post", body)
      .then(response => {
        const action = studentActions.Remove_Student(response.data[0]);
        dispatch(action);
        return response.data;
      })
      .catch(error => {
        console.log(error.response);
        if (error.response.status === 400) {
          message.error({ content: `${"Student is not Found"}`, key });
        } else {
          message.warning({ content: "Delete Failed.", key });
        }
      });
    return request;
  }
  async Gradle_Mark_Service(dispatch, body) {
    message.loading({ content: "Đang xử lý...", key });
    const request = await sendRequest("/student/grade_mark", "post", body)
      .then(response => {
        const action = studentActions.Update_Student(response.data[0]);
        dispatch(action);
        return response.data;
      })
      .catch(error => {
        console.log(error.response);
        if (error.response.status === 400) {
          message.error({ content: `${"Student is not Found"}`, key });
        } else {
          message.warning({ content: "Gradle Failed.", key });
        }
      });
    return request;
  }
}
export default new StudentServices();
