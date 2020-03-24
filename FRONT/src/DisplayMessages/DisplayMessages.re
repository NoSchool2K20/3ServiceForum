[@bs.val] external fetch: string => Js.Promise.t('a) = "fetch";

[@react.component]
let make = _ => {

      (["Message 1","Message 2","Message 3"])
    -> Belt.List.map( (num) => <div> {ReasonReact.string(num)} </div>)
    -> Belt.List.toArray
    -> ReasonReact.array
};