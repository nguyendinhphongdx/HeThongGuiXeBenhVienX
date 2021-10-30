import { StaffConstant } from "../config/constant";

class StaffAction {
  Get_All_Staff(arr) {
    return {
      type: StaffConstant.GET_DATA_STAFF,
      payload: arr,
    };
  }
  Add_Staff(staff) {
    return {
      type: StaffConstant.ADD_STAFF,
      payload: staff,
    };
  }
  Update_Staff(staff) {
    return {
      type: StaffConstant.UPDATE_SATFF,
      payload: staff,
    };
  }
  QueryAll_Account = data => {
    return {
      type: StaffConstant.QUERY_ACCOUNT,
      payload: data,
    };
  };
  Update_User_Account = data => {
    return {
      type: StaffConstant.UPDATE_USER_ACCOUNT,
      payload: data,
    };
  };
}
export default new StaffAction();
