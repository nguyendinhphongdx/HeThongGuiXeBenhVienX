import { DashboardCountConstants } from "../config/constant";

class StatisticActions{
    StatisticAllData(dataStatis){
        return {
            type: DashboardCountConstants.COLLECTION_LOGS,
            payload: dataStatis,
          };
    }
    StatisticGeneralData(statistic){
        return {
            type: DashboardCountConstants.GENERAL,
            payload: statistic,
          };
    }
}
export default new StatisticActions();
