export const onChangeEmailCreation = (event) => ({type: "onChangeEmailCreation", payload: event.target.value.toString()});
export const onChangePasswordCreation = (event) => ({type: "onChangePasswordCreation", payload: event.target.value.toString()});
export const onChangeFirstNameCreation = (event) => ({type: "onChangeFirstNameCreation", payload: event.target.value.toString()});
export const onChangeLastNameCreation = (event) => ({type: "onChangeLastNameCreation", payload: event.target.value.toString()});
export const errorSubmitSignupAction = () => ({type: "errorSubmitSignupAction", payload : true});
export const goodSubmitSignupAction = () => ({type: "goodSubmitSignupAction", payload : false});