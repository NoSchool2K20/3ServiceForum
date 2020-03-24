'use strict';

var React = require("react");
var Belt_List = require("bs-platform/lib/js/belt_List.js");

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
                    return React.createElement("div", undefined, num);
                  })));
}

var make = DisplayMessages;

exports.make = make;
/* react Not a pure module */
