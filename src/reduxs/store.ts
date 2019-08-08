import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { createLogger } from "redux-logger";
import { rootEpic } from "./epic";
import rootReducer from "./reducer";

const epicMiddleware = createEpicMiddleware();
const logger = createLogger({ collapsed: true });
const reduxMiddleware = applyMiddleware(epicMiddleware, logger);

export const store = createStore(rootReducer, {}, reduxMiddleware);
epicMiddleware.run(rootEpic);
