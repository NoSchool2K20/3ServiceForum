[@bs.val] external fetch: string => Js.Promise.t('a) = "fetch";
let message = ReactDOMRe.Style.make(~marginTop="10px", ~padding="10px", ~border="1px solid grey", ~borderRadius="8px", ());

[@react.component]
let make = _ => {
      (["Message 1","Message 2","Message 3"])
    -> Belt.List.map( (num) => <div style=message> {ReasonReact.string(num)} </div>)
    -> Belt.List.toArray
    -> ReasonReact.array;

};

