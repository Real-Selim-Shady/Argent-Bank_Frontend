
export const onChangeEmail = (event) => ({type: "onChangeEmail", payload: event.target.value.toString()});
export const onChangePassword = (event) => ({type: "onChangePassword", payload: event.target.value.toString()});


export const setData = (data) => ({
type: "SET_DATA",
payload: data,
});

export const setRemember = () => ({type: "changeRememberStatus"});

export const errorSubmitSigninAction = () => ({type: "errorSubmitSigninAction", payload : true});
export const goodSubmitSigninAction = () => ({type: "goodSubmitSigninAction", payload : false});