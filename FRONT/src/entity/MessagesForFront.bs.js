'use strict';

var Json = require("@glennsl/bs-json/src/Json.bs.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var Json_encode = require("@glennsl/bs-json/src/Json_encode.bs.js");

function make(idmessage, texte, dateenvoi, idcours, auteur, nblikes, isliked) {
  return /* record */[
          /* idmessage */idmessage,
          /* texte */texte,
          /* dateenvoi */dateenvoi,
          /* idcours */idcours,
          /* auteur */auteur,
          /* nblikes */nblikes,
          /* isliked */isliked
        ];
}

function transformDate(date) {
  return date.toString();
}

function getIdMessage(message) {
  return message[/* idmessage */0];
}

function getTexte(message) {
  return message[/* texte */1];
}

function getDateEnvoi(message) {
  return message[/* dateenvoi */2];
}

function getIdCours(message) {
  return message[/* idcours */3];
}

function getAuteur(message) {
  return message[/* auteur */4];
}

function getNbLikes(message) {
  return message[/* nblikes */5];
}

function isLiked(message) {
  return message[/* isliked */6];
}

function fromJson(json) {
  return /* record */[
          /* idmessage */Json_decode.field("idmessage", Json_decode.string, json),
          /* texte */Json_decode.field("texte", Json_decode.string, json),
          /* dateenvoi */Json_decode.field("dateenvoi", Json_decode.string, json),
          /* idcours */Json_decode.field("idcours", Json_decode.string, json),
          /* auteur */Json_decode.field("auteur", Json_decode.string, json),
          /* nblikes */Json_decode.field("nblikes", Json_decode.string, json),
          /* isliked */Json_decode.field("isliked", Json_decode.string, json)
        ];
}

function fromString(jsonString) {
  var match = Json.parse(jsonString);
  if (match !== undefined) {
    return fromJson(Caml_option.valFromOption(match));
  }
  
}

function toJson(message) {
  return Json_encode.object_(/* :: */[
              /* tuple */[
                "idmessage",
                message[/* idmessage */0]
              ],
              /* :: */[
                /* tuple */[
                  "texte",
                  message[/* texte */1]
                ],
                /* :: */[
                  /* tuple */[
                    "dateenvoi",
                    message[/* dateenvoi */2]
                  ],
                  /* :: */[
                    /* tuple */[
                      "idcours",
                      message[/* idcours */3]
                    ],
                    /* :: */[
                      /* tuple */[
                        "auteur",
                        message[/* auteur */4]
                      ],
                      /* :: */[
                        /* tuple */[
                          "nblikes",
                          message[/* nblikes */5]
                        ],
                        /* :: */[
                          /* tuple */[
                            "isliked",
                            message[/* isliked */6]
                          ],
                          /* [] */0
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]);
}

function toString(message) {
  return JSON.stringify(toJson(message));
}

var MessagesForFront = {
  make: make,
  getIdMessage: getIdMessage,
  getTexte: getTexte,
  getDateEnvoi: getDateEnvoi,
  getIdCours: getIdCours,
  getAuteur: getAuteur,
  getNbLikes: getNbLikes,
  isLiked: isLiked,
  fromJson: fromJson,
  fromString: fromString,
  toJson: toJson,
  toString: toString,
  transformDate: transformDate
};

function fromJson$1(json) {
  return Json_decode.list(fromJson, json);
}

function fromString$1(jsonString) {
  var match = Json.parse(jsonString);
  if (match !== undefined) {
    return Json_decode.list(fromJson, Caml_option.valFromOption(match));
  }
  
}

function toJson$1(messageslist) {
  return $$Array.map(toJson, $$Array.of_list(messageslist));
}

function toString$1(messageslist) {
  return JSON.stringify(toJson$1(messageslist));
}

var MessagesForFrontlist = {
  fromJson: fromJson$1,
  fromString: fromString$1,
  toJson: toJson$1,
  toString: toString$1
};

exports.MessagesForFront = MessagesForFront;
exports.MessagesForFrontlist = MessagesForFrontlist;
/* No side effect */
