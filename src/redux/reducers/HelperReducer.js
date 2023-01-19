import { ActionTypes } from "../ActionConstants/action-types"

const intialState = {
    goods:[]
}

export const HelperReducers = (state=intialState,{type,payload})=>{
    switch(type) {
       case ActionTypes.FETCH_PRODUCTS:
        return{...state,goods:payload}
        default :return state
    };
};


export const HelperReducer  = ((state={},{type,payload})=>{
 switch(type){
    case ActionTypes.SELECTED_PRODUCT:
    return {...state,...payload}
    default :return state
 };
});
