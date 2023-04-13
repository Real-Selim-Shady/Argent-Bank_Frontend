export const selectEmail = (state => state?.email);
export const selectPassword = (state => state?.password);


export const selectEmailCreation = (state => state?.emailCreation);
export const selectPasswordCreation = (state => state?.passwordCreation);
export const selectFirstNameCreation = (state => state?.firstNameCreation);
export const selectLastNameCreation = (state => state?.lastNameCreation);



export const selectData = (state) => state?.data;
export const selectUserData = (state) => state?.userData;
export const selectToken = (state) => state?.token;

export const selectSignupFieldsErrorStatus = (state) => state?.signupFieldsErrorStatus;
export const selectSigninFieldsErrorStatus = (state) => state?.signinFieldsErrorStatus;

export const selectEditUserInfo = (state) => state?.editing;

export const selectRemember = (state) => state?.remembered;