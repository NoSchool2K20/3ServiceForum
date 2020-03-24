'use strict';

var React = require("react");
var Belt_List = require("bs-platform/lib/js/belt_List.js");

var message = {
  border: "1px solid grey",
  marginTop: "10px",
  padding: "10px",
  borderRadius: "8px"
};

function DisplayMessages(Props) {
  return Belt_List.toArray(Belt_List.map(/* :: */[
                  "Message 1",
                  /* :: */[
                    "Message 2",
                    /* :: */[
                      "Message 3",
                      /* [] */0
                    ]
                  ]
                ], (function (num) {
                    return React.createElement("div", {
                                style: message
                              }, num);
                  })));
}

var make = DisplayMessages;

exports.message = message;
exports.make = make;
/* react Not a pure module */
