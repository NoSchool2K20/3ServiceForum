[@bs.val] external fetch: string => Js.Promise.t('a) = "fetch";

[@react.component]
let make = _ => {
    
    let numbers = ["message 1", "Message 2", "Message 3"];
    let listItems = numbers.map((number) =>
      <li>{number}</li>
    );
    ReactDOM.render(<ul>{listItems}</ul>);

  /* <div>
        (ReasonReact.arrayToElement(
          List.map(
            num => <div>
              (str(num ++ ": "))
            </div>,
            numbers
          ) |> Array.of_list
        ))
      </div>
      [1,2,3]
    -> Belt.List.map( (num) => <div> {num -> string_of_int -> ReasonReact.string} </div>)
    -> Belt.List.toArray
    -> ReasonReact.array */
};