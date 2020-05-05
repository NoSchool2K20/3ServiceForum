'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");

function useReducer(initialState, reducer) {
  var match = React.useReducer((function (fullState, action) {
          var match = Curry._2(reducer, action, fullState[/* state */0]);
          if (typeof match === "number") {
            return fullState;
          } else {
            switch (match.tag | 0) {
              case /* Update */0 :
                  return /* record */[
                          /* state */match[0],
                          /* sideEffects */fullState[/* sideEffects */1]
                        ];
              case /* UpdateWithSideEffects */1 :
                  return /* record */[
                          /* state */match[0],
                          /* sideEffects : record */[/* contents */Belt_Array.concat(fullState[/* sideEffects */1][0], /* array */[match[1]])]
                        ];
              case /* SideEffects */2 :
                  return /* record */[
                          /* state */fullState[/* state */0],
                          /* sideEffects : record */[/* contents */Belt_Array.concat(fullState[/* sideEffects */1][0], /* array */[match[0]])]
                        ];
              
            }
          }
        }), /* record */[
        /* state */initialState,
        /* sideEffects : record */[/* contents : array */[]]
      ]);
  var send = match[1];
  var match$1 = match[0];
  var sideEffects = match$1[/* sideEffects */1];
  var state = match$1[/* state */0];
  React.useEffect((function () {
          if (sideEffects[0].length !== 0) {
            var cancelFuncs = Belt_Array.keepMap(sideEffects[0], (function (func) {
                    return Curry._1(func, /* record */[
                                /* send */send,
                                /* state */state
                              ]);
                  }));
            sideEffects[0] = /* array */[];
            var match = cancelFuncs.length !== 0;
            if (match) {
              return (function (param) {
                        return Belt_Array.forEach(cancelFuncs, (function (func) {
                                      return Curry._1(func, /* () */0);
                                    }));
                      });
            } else {
              return ;
            }
          }
          
        }), /* array */[sideEffects]);
  return /* tuple */[
          state,
          send
        ];
}

function useReducerWithMapState(getInitialState, reducer) {
  var match = React.useReducer((function (fullState, action) {
          var match = Curry._2(reducer, action, fullState[/* state */0]);
          if (typeof match === "number") {
            return fullState;
          } else {
            switch (match.tag | 0) {
              case /* Update */0 :
                  return /* record */[
                          /* state */match[0],
                          /* sideEffects */fullState[/* sideEffects */1]
                        ];
              case /* UpdateWithSideEffects */1 :
                  return /* record */[
                          /* state */match[0],
                          /* sideEffects : record */[/* contents */Belt_Array.concat(fullState[/* sideEffects */1][0], /* array */[match[1]])]
                        ];
              case /* SideEffects */2 :
                  return /* record */[
                          /* state */fullState[/* state */0],
                          /* sideEffects : record */[/* contents */Belt_Array.concat(fullState[/* sideEffects */1][0], /* array */[match[0]])]
                        ];
              
            }
          }
        }), /* () */0, (function (param) {
          return /* record */[
                  /* state */Curry._1(getInitialState, /* () */0),
                  /* sideEffects : record */[/* contents : array */[]]
                ];
        }));
  var send = match[1];
  var match$1 = match[0];
  var sideEffects = match$1[/* sideEffects */1];
  var state = match$1[/* state */0];
  React.useEffect((function () {
          if (sideEffects[0].length !== 0) {
            var cancelFuncs = Belt_Array.keepMap(sideEffects[0], (function (func) {
                    return Curry._1(func, /* record */[
                                /* send */send,
                                /* state */state
                              ]);
                  }));
            sideEffects[0] = /* array */[];
            var match = cancelFuncs.length !== 0;
            if (match) {
              return (function (param) {
                        return Belt_Array.forEach(cancelFuncs, (function (func) {
                                      return Curry._1(func, /* () */0);
                                    }));
                      });
            } else {
              return ;
            }
          }
          
        }), /* array */[sideEffects]);
  return /* tuple */[
          state,
          send
        ];
}

exports.useReducer = useReducer;
exports.useReducerWithMapState = useReducerWithMapState;
/* react Not a pure module */
