
/**
 * @description Save Token
 */
let saveToken = (token) => {
    localStorage.setItem("token", token);
};

/**
 * @description Save Temporarily
 */
let saveTokenTemporarily = (token) => {
    sessionStorage.setItem("token", token);
};

/**
 * @description Remove all items from localStorage and sessionStorage
 */
let logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user/signedIn");
    localStorage.removeItem("user/signedInEdited");
    sessionStorage.removeItem("token");
};

/**
 * @description Add new User Data to the localStorage
 */
let updateUserDataStore = (userData) => {
    localStorage.setItem("user/signedInEdited", userData);
};


export const accountService = {
    saveToken, saveTokenTemporarily, logout, updateUserDataStore
};