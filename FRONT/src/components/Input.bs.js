'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Fetch = require("bs-fetch/src/Fetch.js");
var React = require("react");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.js");

var inputStyle = {
  marginTop: "30px",
  padding: "10px"
};

function Input(Props) {
  var match = React.useState((function () {
          return "";
        }));
  var setName = match[1];
  var name = match[0];
  var onChange = function (e) {
    return Curry._1(setName, e.target.value);
  };
  var onSubmit = function (e) {
    e.preventDefault();
    var payload = { };
    payload["idCours"] = "POO";
    payload["auteur"] = "monUser";
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
  return React.createElement("form", {
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
                }, "Envoyer"));
}

var make = Input;

exports.inputStyle = inputStyle;
exports.make = make;
/* react Not a pure module */
