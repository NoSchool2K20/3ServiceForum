'use strict';

var React = require("react");

var inputStyle = {
  padding: "10px"
};

function InputMessage(Props) {
  return React.createElement("div", {
              style: inputStyle
            }, React.createElement("input", {
                  style: inputStyle,
                  placeholder: "Votre message"
                }), React.createElement("button", undefined, "Envoyer"));
}

var make = InputMessage;

exports.inputStyle = inputStyle;
exports.make = make;
/* react Not a pure module */
