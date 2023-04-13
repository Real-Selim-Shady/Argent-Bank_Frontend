import axios from "axios";
import { accountService } from "./accountService";

/**
 * @description Connection API
 */
export async function connectAPI(email, password, rememberState) {
  try {
    const res = await axios.post("http://localhost:3001/api/v1/user/login", { email, password });
    if (rememberState === true) {
      accountService.saveToken(res.data.body.token);
    }
    if (rememberState === false) {
      accountService.saveTokenTemporarily(res.data.body.token);
    }
  } catch (error) {
    if (error.response?.data?.message === "Error: User not found!") {
      window.location.replace("/error/connectUserUnknown");
    } else if (error.response?.data?.message === "Error: Password is invalid") {
      window.location.replace("/error/connectWrongPassword");
    } else if (
      error.response?.data?.message != "Error: User not found!" &&
      error.response?.data?.message != "Error: Password is invalid"
    ) {
      window.location.replace("/error/connection");
    }
  }
}

/**
 * @description Creating Data API
 */
export async function createData(email, password, firstName, lastName) {
  try {
    await axios.post("http://localhost:3001/api/v1/user/signup", { email, password, firstName, lastName });
    window.location.replace("/SuccessSignup/login");
  } catch (error) {
    if (error.response?.data?.message === "Error: Email already exists") {
      window.location.replace("/error/signupMailExist");
    } else {
      window.location.replace("/error/signup");
    }
    accountService.logout();
  }
}

/**
 * @description Retrieving Data API
 */
export async function getData() {
  const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    const response = await axios.post(
      "http://localhost:3001/api/v1/user/profile",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const res = response.data;
    if (res.status != 200) {
      accountService.logout();
      window.location.replace("/*");
      return;
    }
    localStorage.setItem("user/signedIn", JSON.stringify(res));
}


/**
 * @description Updating Data API
 */
export async function updateData (dataEdit) {
  try{
    const token = localStorage.getItem("token") || sessionStorage.getItem("token"); 
    const response = await axios.put("http://localhost:3001/api/v1/user/profile", dataEdit, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json", 
      },
    });
    const res = response.data;
    localStorage.setItem("user/signedInEdited", JSON.stringify(res));
  } catch(error) {
    console.log("error status",error);
    accountService.logout();
    window.location.replace("/*");
    return false;
  }
}



