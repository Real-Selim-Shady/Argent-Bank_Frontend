export const onChangeFirstName = (event) => ({type: "onChangeFirstName", payload: event.target.value.toString()});
export const onChangeLastName = (event) => ({type: "onChangeLastName", payload: event.target.value.toString()});
export const setUserData = (userData) => ({type: "SET_USER_DATA", payload: userData});
export const setFirstName = (firstName) => ({type: "SET_FIRST_NAME", payload: firstName});
export const setLastName = (lastName) => ({type: "SET_LAST_NAME", payload: lastName});