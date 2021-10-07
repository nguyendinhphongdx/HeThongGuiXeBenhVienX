import { HistoryConstant } from "../config/constant";

class HistoryActions{
    GetAllHistory(history){
        return {
            type: HistoryConstant.GET_ALL_HISTORY,
            payload: history,
          };
    }
}
export default new HistoryActions();
