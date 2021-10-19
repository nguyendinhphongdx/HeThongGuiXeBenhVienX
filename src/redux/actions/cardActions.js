import { CardConstant } from "../config/constant";

class CardAction{
    Get_All_Card(arr){
        return {
            type: CardConstant.GET_DATA_CARD,
            payload: arr,
          };
    }
    Add_Card(card){
        return {
            type: CardConstant.ADD_CARD,
            payload: card,
          };
    }
}
export default new CardAction();
