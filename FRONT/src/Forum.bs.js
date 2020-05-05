'use strict';

var React = require("react");
var DisplayMessages$ReasonReactExamples = require("./components/DisplayMessages.bs.js");

function Forum(Props) {
  var token = Props.token;
  var titleCours = Props.titleCours;
  return React.createElement(React.Fragment, undefined, React.createElement("div", undefined, "Forum"), React.createElement(DisplayMessages$ReasonReactExamples.make, {
                  cours: titleCours,
                  user: token
                }));
}

var make = Forum;

exports.make = make;
/* react Not a pure module */
