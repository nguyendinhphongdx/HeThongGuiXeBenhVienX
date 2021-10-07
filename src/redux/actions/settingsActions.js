import { SettingsConstants } from "../config/constant";

class SettingsActions{
    GetConfig(config){
        return {
            type: SettingsConstants.CONFIG,
            payload: config,
          };
    }
}
export default new SettingsActions();
