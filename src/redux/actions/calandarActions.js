import { CalendarConstant } from "../config/constant";

class CalendarActions{
    Get_Data_Schedule(arr){
        return {
            type: CalendarConstant.GET_DATA_SCHEDULE,
            payload: arr,
          };
    }
}
export default new CalendarActions();
