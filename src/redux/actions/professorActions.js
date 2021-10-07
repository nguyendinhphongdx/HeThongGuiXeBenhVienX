import { ProfessorConstant } from "../config/constant";

class ProfessorActions{
    Get_All_Professor(arr){
        return {
            type: ProfessorConstant.GET_ALL_PROFESSOR,
            payload: arr,
          };
    }
    Add_Professor(professors){
        return {
            type: ProfessorConstant.ADD_PROFESSOR,
            payload: professors,
          };
    }
    Update_Professor(professors){
        return {
            type: ProfessorConstant.UPDATE_PROFESSOR,
            payload: professors,
          };
    }
    Remove_Professor(professors){
        return {
            type: ProfessorConstant.REMOVE_PROFESSOR,
            payload: professors,
          };
    }
}
export default new ProfessorActions();
