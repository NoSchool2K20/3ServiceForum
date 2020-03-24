'use strict';

var React = require("react");
var Belt_List = require("bs-platform/lib/js/belt_List.js");

function DisplayMessages(Props) {
  return Belt_List.toArray(Belt_List.map(/* :: */[
                  1,
                  /* :: */[
                    2,
                    /* :: */[
                      3,
                      /* [] */0
                    ]
                  ]
                ], (function (num) {
                    return React.createElement("div", undefined, String(num));
                  })));
}

var make = DisplayMessages;

exports.make = make;
/* react Not a pure module */
