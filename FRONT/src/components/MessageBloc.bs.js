'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Fetch = require("bs-fetch/src/Fetch.js");
var React = require("react");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var MessageBlocStyle$ReasonReactExamples = require("./MessageBlocStyle.bs.js");

var style = document.createElement("style");

document.head.appendChild(style);

style.innerHTML = MessageBlocStyle$ReasonReactExamples.style;

function MessageBloc(Props) {
  var texte = Props.texte;
  var auteur = Props.auteur;
  var dateenvoi = Props.dateenvoi;
  var nblikes = Props.nblikes;
  var idMessage = Props.idMessage;
  var isLiked = Props.isLiked;
  var utilisateur = Props.utilisateur;
  var initialState_000 = /* count */Caml_format.caml_int_of_string(nblikes);
  var initialState_001 = /* hasLiked */isLiked !== "0";
  var initialState = /* record */[
    initialState_000,
    initialState_001,
    /* hasdel */false
  ];
  var reducer = function (state, action) {
    switch (action) {
      case /* Increment */0 :
          return /* record */[
                  /* count */state[/* count */0] + 1 | 0,
                  /* hasLiked */true,
                  /* hasdel */false
                ];
      case /* Decrement */1 :
          return /* record */[
                  /* count */state[/* count */0] - 1 | 0,
                  /* hasLiked */false,
                  /* hasdel */false
                ];
      case /* Delete */2 :
          return /* record */[
                  /* count */state[/* count */0],
                  /* hasLiked */false,
                  /* hasdel */true
                ];
      
    }
  };
  var match = React.useReducer(reducer, initialState);
  var dispatch = match[1];
  var state = match[0];
  var content_del = Caml_obj.caml_equal(auteur, utilisateur) ? React.createElement("img", {
          className: "delimg",
          src: "http://www.myiconfinder.com/uploads/iconsets/256-256-8796bc16719a5e8bbaa44561df7ee979.png",
          onClick: (function (param) {
              Curry._1(dispatch, /* Delete */2);
              var payload = { };
              payload["idMessage"] = Caml_format.caml_int_of_string(idMessage);
              fetch("https://service-forum.cleverapps.io/message", Fetch.RequestInit.make(/* Delete */4, {
                            "Content-Type": "application/json"
                          }, Caml_option.some(JSON.stringify(payload)), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* () */0)).then((function (prim) {
                      return prim.json();
                    }));
              return /* () */0;
            })
        }) : React.createElement("p", undefined);
  var content_like = Caml_obj.caml_notequal(auteur, utilisateur) ? (
      state[/* hasLiked */1] === false ? React.createElement("img", {
              className: "likeimg",
              title: "+1",
              src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/OOjs_UI_icon_heart.svg/1200px-OOjs_UI_icon_heart.svg.png",
              onClick: (function (param) {
                  Curry._1(dispatch, /* Increment */0);
                  var payload = { };
                  payload["idMessage"] = Caml_format.caml_int_of_string(idMessage);
                  payload["userId"] = utilisateur;
                  fetch("https://service-forum.cleverapps.io/like", Fetch.RequestInit.make(/* Post */2, {
                                "Content-Type": "application/json"
                              }, Caml_option.some(JSON.stringify(payload)), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* () */0)).then((function (prim) {
                          return prim.json();
                        }));
                  return /* () */0;
                })
            }) : React.createElement("img", {
              className: "likeimg",
              title: "-1",
              src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Love_Heart_symbol.svg/1111px-Love_Heart_symbol.svg.png",
              onClick: (function (param) {
                  Curry._1(dispatch, /* Decrement */1);
                  var payload = { };
                  payload["idMessage"] = Caml_format.caml_int_of_string(idMessage);
                  payload["userId"] = utilisateur;
                  fetch("https://service-forum.cleverapps.io/like", Fetch.RequestInit.make(/* Delete */4, {
                                "Content-Type": "application/json"
                              }, Caml_option.some(JSON.stringify(payload)), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* () */0)).then((function (prim) {
                          return prim.json();
                        }));
                  return /* () */0;
                })
            })
    ) : React.createElement("p", undefined);
  if (state[/* hasdel */2] === false) {
    return React.createElement("div", {
                className: "content"
              }, React.createElement("div", {
                    className: "info"
                  }, React.createElement("p", {
                        className: "auteur"
                      }, auteur), React.createElement("p", {
                        className: "date"
                      }, dateenvoi), content_del, content_like, React.createElement("p", {
                        className: "likes"
                      }, String(state[/* count */0]))), React.createElement("p", {
                    className: "texte"
                  }, texte));
  } else {
    return React.createElement("div", undefined);
  }
}

var make = MessageBloc;

exports.style = style;
exports.make = make;
/* style Not a pure module */
