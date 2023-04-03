import axios from "axios";
import { accountService } from "./accountService";


export async function connectAPI (email, password) {

    const res = await axios.post("http://localhost:3001/api/v1/user/login", { email, password });
        accountService.saveToken(res.data.body.token);
        localStorage.setItem("fetchedData", JSON.stringify(res)); //fetchedData est un nom trop générique, à changer pour faciliter compréhension
}

export async function createData2 (dataToCreate) {

    /*const res =*/ await axios.post("http://localhost:3001/api/v1/user/signup", dataToCreate);
        //accountService.saveToken(res.data.body.token);
        //localStorage.setItem("fetchedData", JSON.stringify(res)); //fetchedData est un nom trop générique, à changer pour faciliter compréhension
}

export const createData = (email, password, firstName, lastName) => {

  axios.post("http://localhost:3001/api/v1/user/signup", { email, password, firstName, lastName })
  .catch((error) => console.log(error));
      //accountService.saveToken(res.data.body.token);
      //localStorage.setItem("fetchedData", JSON.stringify(res)); //fetchedData est un nom trop générique, à changer pour faciliter compréhension
};


    /*axios.post("http://localhost:3001/api/v1/user/profile", {}, {
        headers: {Authorization: `Bearer ${localStorage.getItem("token")}` }
      } )*/
    //console.log("token", localStorage.getItem("token"));

export async function getData () {
    const response = await fetch ("http://localhost:3001/api/v1/user/profile", {
    method: "post",
    headers: {Authorization: `Bearer ${localStorage.getItem("token2")}` }
    //headers: {Authorization: ` ${localStorage.getItem("token2")}` }
    } );
    //console.log("response getData", response);
    const res = await response.json();
    if (res.status != 200){
      //navigate vers login
      //avec return
    }
    //console.log("res getData", res);
    localStorage.setItem("user/signedUp", JSON.stringify(res));
}



export async function updateData (dataEdit) {
  const response = await fetch("http://localhost:3001/api/v1/user/profile", {
    method: "put",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token2")}`,
      "Content-Type": "application/json", // spécifie que le corps est en JSON
    },
    body: JSON.stringify(dataEdit), // convertit l'objet en chaîne JSON
  });
  const res = await response.json();
  console.log("res",res);
  if (res.status != 200){
    //nom de l'erreur en premier lieu
    //navigate vers login au bout de quelques secondes
    //avec return
    //ou bien, est-ce que je devrais pas renvoyer justement vers la page d'erreur tout simplement
  }
  localStorage.setItem("user/signedUpEdited2", JSON.stringify(res));
}

export const updateData2 = (dataEdit) => {
  //const data = { firstName: "Tony", lastName: "Stark" };
  fetch("http://localhost:3001/api/v1/user/profile", {
    method: "put",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token2")}`,
      "Content-Type": "application/json", // spécifie que le corps est en JSON
    },
    body: JSON.stringify(dataEdit), // convertit l'objet en chaîne JSON
  })
    .then((response) => response.json())
    .then((res) => {
      accountService.updateUserDataStore(res);
      localStorage.setItem("user/signedUpEdited2", JSON.stringify(res));
      console.log("lancé");
      console.log("gueule de l'edit", res);
    })
    .catch((error) => console.log(error));
};

//-> reboot de données
export const rebootData = () => {
  const data = { firstName: "Tony", lastName: "Stark" };
  fetch("http://localhost:3001/api/v1/user/profile", {
    method: "put",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json", // spécifie que le corps est en JSON
    },
    body: JSON.stringify(data), // convertit l'objet en chaîne JSON
  })
    .then((response) => response.json())
    .then((res) => {
      accountService.updateUserDataStore(res);
      console.log("lancé");
      console.log("gueule de l'edit", res);
    })
    .catch((error) => console.log(error));
};


