
let saveToken = (token) => {
    localStorage.setItem("token", token);
};

let logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("fetchedData");
};

let isLogged = () => {
    let token = localStorage.getItem("token");
    //console.log(token);
    return !!token;
};

export const accountService = {
    saveToken, logout, isLogged
};