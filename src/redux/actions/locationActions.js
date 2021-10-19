import { LocationConstant } from "../config/constant";

class LocationAction{
    Get_All_Location(arr){
        return {
            type: LocationConstant.GET_DATA_LOCATION,
            payload: arr,
          };
    }
    Add_Location(location){
        return {
            type: LocationConstant.ADD_LOCATION,
            payload: location,
          };
    }
}
export default new LocationAction();
