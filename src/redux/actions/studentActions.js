import { StudentConstant } from "../config/constant";

class StudentActions{
    Get_All_Student=(students) => {
        return {
           type: StudentConstant.GET_ALL_STUDENT,
           payload: students
       }
   }
   Add_Student=(student) => {
       return {
          type: StudentConstant.ADD_STUDENT,
          payload: student
      }
   }
   Update_Student=(student) => {
       return {
          type: StudentConstant.UPDATE_STUDENT,
          payload: student
      }
   }
   Remove_Student=(student) => {
       return {
          type: StudentConstant.REMOVE_STUDENT,
          payload: student
      }
   }
   Change_Avatar_Student=(idStudent,image) => {
       return {
          type: StudentConstant.CHANGE_AVATAR_STUDENT,
          payload: {idStudent,image}
      }
   }
}
export default new StudentActions();