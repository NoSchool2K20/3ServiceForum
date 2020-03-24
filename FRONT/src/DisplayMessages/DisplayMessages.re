[@bs.val] external fetch: string => Js.Promise.t('a) = "fetch";

[@react.component]
let make = _ => {

      ([1,2,3])
    -> Belt.List.map( (num) => <div> {num -> string_of_int -> ReasonReact.string} </div>)
    -> Belt.List.toArray
    -> ReasonReact.array
};