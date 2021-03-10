import { combineReducers } from "redux";

import resultsReducer from "./results/reducer";
import repositoryReducer from "./repository/reducer";

const rootReducer = combineReducers({
    results: resultsReducer,
    repository: repositoryReducer
});

export default rootReducer;