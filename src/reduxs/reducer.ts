import { combineReducers, AnyAction, Reducer } from "redux";

const root: Reducer<string, AnyAction> = combineReducers({} as any);

export const rootReducer = root;
