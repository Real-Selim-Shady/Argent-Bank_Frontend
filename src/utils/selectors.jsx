
export const selectState1 = (state) => state?.state1;

export const selectState2 = (state) => state?.state2;

export const selectEmail = (state => state?.email);
export const selectPassword = (state => state?.password);

//export const selectFirstName = (state => state?.firstName);
//export const selectLastName = (state => state?.lastName);

export const selectEmailCreation = (state => state?.emailCreation);
export const selectPasswordCreation = (state => state?.passwordCreation);
export const selectFirstNameCreation = (state => state?.firstNameCreation);
export const selectLastNameCreation = (state => state?.lastNameCreation);



export const selectData = (state) => state?.data;
export const selectUserData = (state) => state?.userData;
export const selectToken = (state) => state?.token;

export const selectSignupFieldsErrorStatus = (state) => state?.signupFieldsErrorStatus;