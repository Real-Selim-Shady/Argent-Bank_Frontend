
let saveToken = (token) => {
    localStorage.setItem("token2", token);
};

let logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("token2");
    localStorage.removeItem("fetchedData");
    localStorage.removeItem("user/signedUp");
    localStorage.removeItem("user/signedUpEdited");
    localStorage.removeItem("user/signedUpEdited2");
};

let isLogged = () => {
    let token = localStorage.getItem("token2");
    return !!token;
};

let userDataStore = (userData) => {
    localStorage.setItem("userData", userData);
};

let updateUserDataStore = (userData) => {
    localStorage.setItem("user/signedUpEdited", userData);
};


export const accountService = {
    saveToken, logout, isLogged, userDataStore, updateUserDataStore
};