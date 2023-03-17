/* eslint-disable no-unused-vars */
import {createStore} from "redux";
import produce from "immer";
import { action1 } from "../component/component1/Actions";
import { action2 } from "../component/component2/Actions";
import { onChangeEmail } from "../component/connect/Actions";
import { onChangePassword } from "../component/connect/Actions";
import { setFetchedData } from "../component/connect/Actions";


const initialState = {
    state1 : "",
    state2 : "",
    email: "tony@stark.com",
    password:"password123",
    data: {},
};


function reducer( state = initialState, action){
    switch(action.type){
        case "actionDesc1":
            return  produce(state, draft => {
                draft.state1 = "blabla1";
            });
        case "actionDesc2":
            return  produce(state, draft => {
                draft.state2 = "blabla2";
            });
        case "onChangeEmail":
            return produce(state, draft => {
                draft.email = action.payload;
            });
        case "onChangePassword":
            return produce(state, draft => {
                draft.password = action.payload;
            });
        case "SET_DATA":
            return produce(state, (draft) => {
                draft.data = action.payload;
            });
        default:
            return state;
    }
}

export const store = createStore(reducer);

store.subscribe(() => {
    console.log(store.getState());
    console.log(store.getState("data"));
  });

