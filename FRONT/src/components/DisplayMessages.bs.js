'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Fetch = require("bs-fetch/src/Fetch.js");
var React = require("react");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.js");
var Input$ReasonReactExamples = require("./Input.bs.js");
var Messages$ReasonReactExamples = require("../entity/Messages.bs.js");
var MessageBloc$ReasonReactExamples = require("./MessageBloc.bs.js");
var DisplayMessagesStyle$ReasonReactExamples = require("./DisplayMessagesStyle.bs.js");

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
  var getMessagesLists = function (cours, user) {
    fetch("https://service-forum.cleverapps.io/message?cours=" + (cours + ("&userId=" + user)), Fetch.RequestInit.make(/* Get */0, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* () */0)).then((function (prim) {
                return prim.json();
              })).then((function (json) {
              Curry._1(setStateMessage, (function (param) {
                      return List.append(stateMessage, Messages$ReasonReactExamples.Messageslist.fromJson(json));
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
  return React.createElement("div", undefined, React.createElement("button", {
                  onClick: (function (param) {
                      return ReasonReactRouter.push("/");
                    })
                }, "Rafraichir"), stateMessage ? React.createElement("div", {
                    className: "content-main"
                  }, $$Array.of_list(List.map((function (p) {
                              return React.createElement(MessageBloc$ReasonReactExamples.make, {
                                          texte: Messages$ReasonReactExamples.Messages.getTexte(p),
                                          auteur: Messages$ReasonReactExamples.Messages.getAuteur(p),
                                          dateenvoi: Messages$ReasonReactExamples.Messages.getDateEnvoi(p),
                                          nblikes: Messages$ReasonReactExamples.Messages.getNbLikes(p)
                                        });
                            }), stateMessage))) : React.createElement("div", undefined, React.createElement("p", undefined, "Aucun message, postez-en un!")), React.createElement(Input$ReasonReactExamples.make, { }));
}

var make = DisplayMessages;

exports.style = style;
exports.make = make;
/* style Not a pure module */
