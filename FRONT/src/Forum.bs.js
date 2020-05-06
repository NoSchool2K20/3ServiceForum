'use strict';

var React = require("react");
var DisplayMessages$ReasonReactExamples = require("./components/DisplayMessages.bs.js");

function Forum(Props) {
  return React.createElement(DisplayMessages$ReasonReactExamples.make, {
              cours: "POO",
              user: "monUser"
            });
}

var make = Forum;

exports.make = make;
/* react Not a pure module */
