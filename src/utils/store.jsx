
import {createStore} from "redux";
import produce from "immer";

const initialState = {
    email: "",
    password:"",
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
    signinFieldsErrorStatus: false,
    editing: false,
    remembered: false,
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
        case "errorSubmitSigninAction":
            return produce(state, draft => {
                draft.signinFieldsErrorStatus = action.payload;
            });
        case "goodSubmitSigninAction":
            return produce(state, draft => {
                draft.signinFieldsErrorStatus = action.payload;
            });
        case "isEditing":
            return produce(state, draft => {
                draft.editing = action.payload;
            });
        case "isNotEditing":
            return produce(state, draft => {
                draft.editing = action.payload;
            });
        case "changeRememberStatus":
            return produce(state, draft => {
                draft.remembered = !draft.remembered;
            });
        default:
            return state;
    }
}

export const store = createStore(reducer);

store.subscribe(() => {
    console.log(store.getState());
  });

