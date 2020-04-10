import React from "react";

const Input = props => {
  return (
    <React.Fragment>
      <fieldset className={props.className}>
        <legend>{props.placeholder}</legend>
        <input type={props.type} name={props.name} title={props.title} />
      </fieldset>
    </React.Fragment>
  );
};

export default Input;
