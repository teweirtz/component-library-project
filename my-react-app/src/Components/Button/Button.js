import React from "react";
import "./Button.css";

const Button = props => {
  let classList = "";
  let types = ["primary", "danger", "success", "warning", "default"];
  if (types.includes(props.type)) {
    classList += ` button-${props.type}`;
  }
  if (props.hover) {
    if (!props.type) {
      classList += ` button-default-hover`;
    } else {
      classList += ` button-${props.type}-hover`;
    }
  }
  if (props.large) {
    classList += ` button-large`;
  }
  if (props.outline) {
    if (!props.type) {
    classList += ` button-default-outline`;
    } else {
    classList += ` button-${props.type}-outline`;
    }
}
  if (props.pale) {
    if (!props.type) {
      classList += ` button-default-pale `;
    } else {
      classList += ` button-${props.type}-pale `;
    }
  }

  return <button className={classList} onClick={props.onClick}>{props.label}</button>;
};

export default Button;
