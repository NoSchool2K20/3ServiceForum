'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Fetch = require("bs-fetch/src/Fetch.js");
var React = require("react");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.js");
var MessageBloc$ReasonReactExamples = require("./MessageBloc.bs.js");
var MessagesForFront$ReasonReactExamples = require("../entity/MessagesForFront.bs.js");
var DisplayMessagesStyle$ReasonReactExamples = require("./DisplayMessagesStyle.bs.js");

var inputStyle = {
  marginTop: "30px",
  padding: "10px"
};

var style = document.createElement("style");

document.head.appendChild(style);

style.innerHTML = DisplayMessagesStyle$ReasonReactExamples.style;

function DisplayMessages(Props) {
  var cours = Props.cours;
  var user = Props.user;
  var match = React.useState((function () {
          return /* [] */0;
        }));
  var setStateMessage = match[1];
  var stateMessage = match[0];
  var match$1 = React.useState((function () {
          return "";
        }));
  var setName = match$1[1];
  var name = match$1[0];
  var getMessagesLists = function (cours, user) {
    fetch("https://service-forum.cleverapps.io/message?cours=" + (cours + ("&userId=" + user)), Fetch.RequestInit.make(/* Get */0, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* () */0)).then((function (prim) {
                return prim.json();
              })).then((function (json) {
              Curry._1(setStateMessage, (function (param) {
                      return List.append(stateMessage, MessagesForFront$ReasonReactExamples.MessagesForFrontlist.fromJson(json));
                    }));
              console.log(stateMessage);
              return Promise.resolve(/* () */0);
            })).catch((function (_err) {
            return Promise.resolve(/* () */0);
          }));
    return /* () */0;
  };
  React.useEffect((function () {
          getMessagesLists(cours, user);
          return ;
        }), ([]));
  var onChange = function (e) {
    return Curry._1(setName, e.target.value);
  };
  var onSubmit = function (e) {
    e.preventDefault();
    var payload = { };
    payload["idCours"] = cours;
    payload["auteur"] = user;
    payload["texte"] = name;
    fetch("https://service-forum.cleverapps.io/message", Fetch.RequestInit.make(/* Post */2, {
                    "Content-Type": "application/json"
                  }, Caml_option.some(JSON.stringify(payload)), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* () */0)).then((function (prim) {
              return prim.json();
            })).then((function (param) {
            Curry._1(setName, (function (param) {
                    return "";
                  }));
            ReasonReactRouter.push("");
            return Promise.resolve(/* () */0);
          }));
    return /* () */0;
  };
  return React.createElement("div", undefined, React.createElement("form", {
                  onSubmit: onSubmit
                }, React.createElement("input", {
                      style: inputStyle,
                      name: "name",
                      placeholder: "Votre message",
                      type: "text",
                      value: name,
                      onChange: onChange
                    }), React.createElement("button", {
                      type: "submit"
                    }, "Envoyer")), stateMessage ? React.createElement("div", {
                    className: "content-main",
                    onChange: onChange
                  }, $$Array.of_list(List.map((function (p) {
                              return React.createElement(MessageBloc$ReasonReactExamples.make, {
                                          texte: MessagesForFront$ReasonReactExamples.MessagesForFront.getTexte(p),
                                          auteur: MessagesForFront$ReasonReactExamples.MessagesForFront.getAuteur(p),
                                          dateenvoi: MessagesForFront$ReasonReactExamples.MessagesForFront.getDateEnvoi(p),
                                          nblikes: MessagesForFront$ReasonReactExamples.MessagesForFront.getNbLikes(p),
                                          idMessage: MessagesForFront$ReasonReactExamples.MessagesForFront.getIdMessage(p),
                                          isLiked: MessagesForFront$ReasonReactExamples.MessagesForFront.isLiked(p),
                                          utilisateur: user
                                        });
                            }), stateMessage))) : React.createElement("div", undefined, React.createElement("p", undefined, "Aucun message, postez-en un!")));
}

var make = DisplayMessages;

exports.inputStyle = inputStyle;
exports.style = style;
exports.make = make;
/* style Not a pure module */
