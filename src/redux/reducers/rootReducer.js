import { combineReducers } from "redux";
import calendar from "./CalendarReducer";
import _class from "./classReducer";
import history from "./historyReducer";
import changeState from "./layoutReducer";
import settings from "./settingsReducer";
import statistic from "./statisticReducer";
import users from "./userReducer";
import professor from "./professorReducer";
import document from "./documentReducer";
import student from "./studentReducer";
import subject from "./subjectReducer";
import messages from "./messageReducer";
const myReducers = combineReducers({
  Layout:changeState,
  Statistic:statistic,
  Settings:settings,
  Users:users,
  Calendar:calendar,
  History:history,
  Class:_class,
  Professor:professor,
  Document:document,
  Student:student,
  Subject:subject,
  Message:messages
});
export default myReducers;