[@bs.val] external fetch: string => Js.Promise.t('a) = "fetch";

let url = region => {
    "https://pokemons-apielsa.herokuapp.com/pokemon-types/"
  };
  
  [@react.component]
  let make = (~region) => {
    let (breweries, setBreweries) = React.useState(() => []);
  
    React.useEffect1(
      () => {
        Js.Promise.(
          Fetch.fetch(url(region))
          |> then(response => {
               resolve(response);
             })
        );
        None;
      },
      [|region|],
    );
  
    let renderBrewery = brw => <div> {ReasonReact.string(brw##id)} </div>;
  
    <div>
      {breweries |> List.map(renderBrewery) |> Array.of_list |> React.array}
    </div>;
  };