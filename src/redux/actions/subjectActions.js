import { SubjectConstant } from "../config/constant";
class SubjectActions{
    Get_All_Subject=(subjects) => {
        return {
           type: SubjectConstant.GET_ALL_SUBJECT,
           payload: subjects
       }
   }
   Add_Subject=(subject) => {
       return {
          type: SubjectConstant.ADD_SUBJECT,
          payload: subject
      }
   }
   Update_Subject=(subject) => {
       return {
          type: SubjectConstant.UPDATE_SUBJECT,
          payload: subject
      }
   }
   Remove_Subject=(subject) => {
       return {
          type: SubjectConstant.REMOVE_SUBJECT,
          payload: subject
      }
   }
}
export default new SubjectActions();
