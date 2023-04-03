/* eslint-disable no-unused-vars */
import {createStore} from "redux";
import produce from "immer";
import { action1 } from "../component/component1/Actions";
import { action2 } from "../component/component2/Actions";
import { onChangeEmail } from "../component/connect/Actions";
import { onChangePassword } from "../component/connect/Actions";
import { onChangeFirstName } from "../component/profile/Actions";
import { onChangeLastName } from "../component/profile/Actions";
import { setFetchedData } from "../component/connect/Actions";
import { setFirstName } from "../component/profile/Actions";
import { setLastName } from "../component/profile/Actions";
import { setToken } from "../component/profile/Actions";
import { onChangeEmailCreation } from "../component/signup/Actions";
import { onChangePasswordCreation } from "../component/signup/Actions";
import { onChangeLastNameCreation } from "../component/signup/Actions";
import { onChangeFirstNameCreation } from "../component/signup/Actions";
import { errorSubmitSignupAction } from "../component/signup/Actions";
import { goodSubmitSignupAction } from "../component/signup/Actions";

const initialState = {
    state1 : "",
    state2 : "",
    email: "tony@stark.com",
    password:"password123",
    data: {},
    userData: {},
    firstName: "",
    lastName: "",
    token : "",
    emailCreation:"",
    passwordCreation:"",
    firstNameCreation:"",
    lastNameCreation:"",
    signupFieldsErrorStatus: false,
    editing: false,
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
        case "SET_USER_DATA":
            return produce(state, (draft) => {
                draft.userData = action.payload;
            });
        case "onChangeFirstName":
            return produce(state, draft => {
                draft.userData.body.firstName = action.payload;
                //draft.firstName = action.payload;
            });
        case "onChangeLastName":
            return produce(state, draft => {
                draft.userData.body.lastName = action.payload;
            });
        case "setFirstName":
            return produce(state, draft => {
                draft.firstName = action.payload;
            });
        case "setLastName":
            return produce(state, draft => {
                draft.lastName = action.payload;
            });
        case "SET_TOKEN":
            return produce(state, draft => {
                draft.token = action.payload;
            });
        case "SET_EDITED_USER_DATA":
            return produce(state, (draft) => {
                draft.firstName = action.payload.firstName;
                draft.lastName = action.payload.lastName;
            });
        case "onChangeFirstNameCreation":
            return produce(state, draft => {
                draft.firstNameCreation = action.payload;
            });
        case "onChangeLastNameCreation":
            return produce(state, draft => {
                draft.lastNameCreation = action.payload;
            });
        case "onChangeEmailCreation":
            return produce(state, draft => {
                draft.emailCreation = action.payload;
            });
        case "onChangePasswordCreation":
            return produce(state, draft => {
                draft.passwordCreation = action.payload;
            });
        case "errorSubmitSignupAction":
            return produce(state, draft => {
                draft.signupFieldsErrorStatus = action.payload;
            });
        case "goodSubmitSignupAction":
            return produce(state, draft => {
                draft.signupFieldsErrorStatus = action.payload;
            });
        case "isEditing":
            return produce(state, draft => {
                draft.editing = action.payload;
            });
        case "isNotEditing":
            return produce(state, draft => {
                draft.editing = action.payload;
            });
        default:
            return state;
    }
}

export const store = createStore(reducer);

store.subscribe(() => {
    console.log(store.getState());
  });

