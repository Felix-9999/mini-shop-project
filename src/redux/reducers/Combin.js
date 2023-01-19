import { combineReducers } from "redux";
import { HelperReducer, HelperReducers } from "./HelperReducer";

const reducers = combineReducers({
    allReducer:HelperReducers,
    product:HelperReducer,
})

export default  reducers