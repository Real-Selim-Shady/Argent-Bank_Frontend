
let saveToken = (token) => {
    localStorage.setItem("token", token);
};

let logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("fetchedData");
    localStorage.removeItem("userData");
};

let isLogged = () => {
    let token = localStorage.getItem("token");
    //console.log(token);
    return !!token;
};

let userData = () => {
    localStorage.setItem("userData", userData);
};

export const accountService = {
    saveToken, logout, isLogged, userData
};