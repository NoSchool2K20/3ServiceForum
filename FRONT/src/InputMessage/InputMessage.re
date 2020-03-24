[@bs.val] external fetch: string => Js.Promise.t('a) = "fetch";
let inputStyle = ReactDOMRe.Style.make( ~padding="10px", ());

[@react.component]
let make = _ => {
    <div style=inputStyle >
      <input style=inputStyle placeholder="Votre message"/>
      <button>{ReasonReact.string("Envoyer")} </button>
    </div>
};