import { ClassConstant } from "../config/constant";

class ClassActions{
    Get_All_Class(arr){
        return {
            type: ClassConstant.GET_ALL_CLASS,
            payload: arr,
          };
    }
    Add_Class(_class){
        return {
            type: ClassConstant.ADD_CLASS,
            payload: _class,
          };
    }
    Update_Class(_class){
        return {
            type: ClassConstant.UPDATE_CLASS,
            payload: _class,
          };
    }
    Remove_Class(_class){
        return {
            type: ClassConstant.REMOVE_CLASS,
            payload: _class,
          };
    }
    Assign_Professor(_class){
        return {
            type: ClassConstant.ASSIGN_PROFESSOR,
            payload: _class,
          };
    }
    Add_Member(_class){
        return {
            type: ClassConstant.ADD_MEMBER,
            payload: _class,
          };
    }
    Get_Data_Chart(arr){
        return {
            type: ClassConstant.GET_DATA_CHART,
            payload: arr,
          };
    }
}
export default new ClassActions();
