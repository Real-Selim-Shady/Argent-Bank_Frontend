import React from "react";
import "./Error.css";

/**
 * @description Function rendering an overall error message
 */
function Error(){

    return(
        <p>
            We apologize, but something went wrong with your request. 
            <br/>Thus, we are, for the moment, unable to respond to it.
            <br/>You may want to try again later, or contact us at contact@argentbank.com.
        </p>
    );
}

export default Error;