import { combineReducers } from "redux";
import filterReducer from "../dashboard/EngagementsPage/SearchFilter/reducer";
import tableReducer from "../dashboard/EngagementsPage/EngagementsList/reducer";

export default combineReducers<{}>({
  filterReducer,
  tableReducer
});
