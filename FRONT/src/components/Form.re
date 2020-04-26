
type ctx = {input: string,utilisateur:string};


let component = ReasonReact.statelessComponent("Form");

module Styles = {
  let card =
    ReactDOMRe.Style.make(
      ~float="right",
      ~clear="right",
      ~border="2px solid #898989",
      ~borderRadius="4px",
      ~padding="1rem",
      (),
    );
};

let make = (~ctx: ctx, ~appSend, _children) => {
  ...component,
  render: _self =>
    <form
      onSubmit={
        ev => {
          ReactEvent.Form.preventDefault(ev);
          appSend(Root.UpdateInput({ctx.input},{ctx.utilisateur}));
          appSend(Root.Search);
        }
      }>
      <label htmlFor="search"> {ReasonReact.string("Search")} </label>
           <button type_="submit"> {ReasonReact.string("Submit Search")} </button>
    </form>,
};