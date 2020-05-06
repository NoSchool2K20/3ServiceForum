module Messages: {
  type t;
  let make: (string, string, string, string, string, string, string) => t;
  let getIdMessage: t => string;
  let getTexte: t => string;
  let getDateEnvoi: t => string;
  let getIdCours: t => string;
  let getAuteur: t => string;
  let getNbLikes : t => string;
  let getIsLiked : t => string;
  let fromJson: Js.Json.t => t;
  let fromString: string => option(t);
  let toJson: t => Js.Json.t;
  let toString: t => string;
  let transformDate : Js.Date.t => string;
} = {
  type t = {
    idmessage: string,
    texte: string,
    dateenvoi: string,
    idcours: string,
    auteur: string,
    nblikes : string,
    isLiked : string,
  };

  let make = (idmessage, texte, dateenvoi, idcours, auteur, nblikes, isLiked) => {idmessage, texte, dateenvoi, idcours, auteur, nblikes, isLiked};

  let transformDate = date => Js.Date.toString(date);

  let getIdMessage = message => message.idmessage;
  let getTexte = message => message.texte;
  let getDateEnvoi = message => message.dateenvoi;
  let getIdCours = message => message.idcours;
  let getAuteur = message => message.auteur;
  let getNbLikes = message => message.nblikes;
  let getIsLiked = message => message.isLiked;

  let fromJson = json =>
    Json.Decode.{
      idmessage: json |> field("idmessage", string),
      texte: json |> field("texte", string),
      dateenvoi: json |> field("dateenvoi", string),
      idcours: json |> field("idcours", string),
      auteur: json |> field("auteur", string),
      nblikes: json |> field("nblikes", string),
      isLiked: json |> field("isLiked", string),
    };

  let fromString = jsonString =>
    switch (Json.parse(jsonString)) {
    | Some(validJson) => Some(fromJson(validJson))
    | None => None
    };

  let toJson = message =>
    Json.Encode.(
      object_([
        ("idmessage", string(message.idmessage)),
        ("texte", string(message.texte)),
        ("dateenvoi", string(message.dateenvoi)),
        ("idcours", string(message.idcours)),
        ("auteur", string(message.auteur)),
        ("nblikes", string(message.nblikes)),
        ("isLiked", string(message.isLiked)),
      ])
    );
  let toString = message => toJson(message) |> Js.Json.stringify;
};

module Messageslist: {
  type t = list(Messages.t); // do not overuse abstraction when unecessary
  let fromJson: Js.Json.t => t;
  let fromString: string => option(t);
  let toJson: t => Js.Json.t;
  let toString: t => string;
} = {
  type t = list(Messages.t);

  let fromJson: Js.Json.t => t =
    json => json |> Json.Decode.(list(Messages.fromJson));

  let fromString = jsonString =>
    switch (Json.parse(jsonString)) {
    | Some(validJson) => Some(fromJson(validJson))
    | None => None
    };

  let toJson = messageslist =>
    Array.of_list(messageslist)
    |> Array.map(item => Messages.toJson(item))
    |> Json.Encode.jsonArray;
  let toString = messageslist => toJson(messageslist) |> Js.Json.stringify;
};
