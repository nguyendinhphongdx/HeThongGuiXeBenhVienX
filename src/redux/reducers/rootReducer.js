import { combineReducers } from "redux";
import card from "./cardReducer";
import changeState from "./layoutReducer";
import location from "./locationReducer";
import price from "./priceReducer";
import role from "./roleReducer";
import settings from "./settingsReducer";
import staff from "./staffReducer";
import statistic from "./statisticReducer";
import ticket from "./ticketReducer";
import users from "./userReducer";
const myReducers = combineReducers({
  Layout:changeState,
  Statistic:statistic,
  Settings:settings,
  Users:users,
  Location:location,
  Staff:staff,
  Ticket:ticket,
  Card:card,
  Price:price,
  Role:role
});
export default myReducers;