
let saveToken = (token) => {
    localStorage.setItem("token", token);
};

let saveTokenTemporarily = (token) => {
    sessionStorage.setItem("token", token);
};

let logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user/signedIn");
    localStorage.removeItem("user/signedInEdited");
    sessionStorage.removeItem("token");
};

let isLogged = () => {
    let token = localStorage.getItem("token");
    return !!token;
};

let userDataStore = (userData) => {
    localStorage.setItem("userData", userData);
};

let updateUserDataStore = (userData) => {
    localStorage.setItem("user/signedInEdited", userData);
};


export const accountService = {
    saveToken, saveTokenTemporarily, logout, isLogged, userDataStore, updateUserDataStore
};