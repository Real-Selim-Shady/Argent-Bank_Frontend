
export const onChangeEmail = (event) => ({type: "onChangeEmail", payload: event.target.value.toString()});
export const onChangePassword = (event) => ({type: "onChangePassword", payload: event.target.value.toString()});


export const setData = (data) => ({
type: "SET_DATA",
payload: data,
});

//export const onChangeEmail = (event) => ({type: "onChangeEmail", event});
//export const onChangePassword = (event) => ({type: "onChangePassword"}, event);