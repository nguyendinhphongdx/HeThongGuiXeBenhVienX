import { TicketConstant } from "../config/constant";

class TicketActions{
    Get_All_Ticket=(tickets) => {
        return {
           type: TicketConstant.GET_DATA_TICKET,
           payload: tickets
       }
   }
   Add_Ticket=(ticket) => {
       return {
          type: TicketConstant.ADD_TICKET,
          payload: ticket
      }
   }
}
export default new TicketActions();