import React from "react";

function Form(props) {
  return (
    <div className="formatic">
      <div className="starter">
      <h1>Create your account</h1>
      <p>Start building your dollar-denominated investment portfolio</p>
      </div>
      <div className="left-angle">
        <form className="form">
          <input type="text" placeholder="Username" /> 
          <input type="password" placeholder="Password" /> 
          {!props.isRegistered && (
            <input type="password" placeholder="Confirm Password" /> 
          )} 

          <button type="submit">
            {props.isRegistered ? "Login" : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
