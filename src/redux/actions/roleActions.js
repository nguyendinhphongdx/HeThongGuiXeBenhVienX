import {RoleConstant} from '../config/constant';
class RoleActions{
    Get_All_Roles=(roles) => {
        return {
           type: RoleConstant.GET_DATA_ROLE,
           payload: roles
       }
   }
    Add_Role=(role) => {
    return {
       type: RoleConstant.ADD_ROLE,
       payload: role
   }
}
}
export default new RoleActions();