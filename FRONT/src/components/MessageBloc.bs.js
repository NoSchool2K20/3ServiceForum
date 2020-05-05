'use strict';

var React = require("react");
var MessageBlocStyle$ReasonReactExamples = require("./MessageBlocStyle.bs.js");

var style = document.createElement("style");

document.head.appendChild(style);

style.innerHTML = MessageBlocStyle$ReasonReactExamples.style;

function MessageBloc(Props) {
  var texte = Props.texte;
  var auteur = Props.auteur;
  var dateenvoi = Props.dateenvoi;
  var nblikes = Props.nblikes;
  return React.createElement("div", {
              className: "content"
            }, React.createElement("div", {
                  className: "info"
                }, React.createElement("p", {
                      className: "auteur"
                    }, auteur), React.createElement("p", {
                      className: "date"
                    }, dateenvoi), React.createElement("p", {
                      className: "likes"
                    }, nblikes)), React.createElement("p", {
                  className: "texte"
                }, texte));
}

var make = MessageBloc;

exports.style = style;
exports.make = make;
/* style Not a pure module */
