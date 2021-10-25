import { StaffConstant } from "../config/constant";

class StaffAction{
    Get_All_Staff(arr){
        return {
            type: StaffConstant.GET_DATA_STAFF,
            payload: arr,
          };
    }
    Add_Staff(staff){
        return {
            type: StaffConstant.ADD_STAFF,
            payload: staff,
          };
    }
    Update_Staff(staff){
        return {
            type: StaffConstant.UPDATE_SATFF,
            payload: staff,
          };
    }
}
export default new StaffAction();
