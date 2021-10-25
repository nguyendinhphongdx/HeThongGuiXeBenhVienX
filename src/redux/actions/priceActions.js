import {PriceConstant} from '../config/constant';
class PriceActions{
    Get_All_Prices=(prices) => {
        return {
           type: PriceConstant.GET_DATA_PRICE,
           payload: prices
       }
   }
    Add_Price=(price) => {
    return {
       type: PriceConstant.ADD_PRICE,
       payload: price
   }
}
}
export default new PriceActions();