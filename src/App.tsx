import React, { useState } from "react";
import "./App.css";
import { useFormik } from "formik";

type Pokemon = {
  name: string;
  move: string;
};

function App() {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: { pokemonName: "" },
    onSubmit: () => {
      fetch("https://pokeapi.co/api/v2/pokemon/squirtle")
        .then((res) => res.json())
        .then((res) =>
          // setTimeout(
          //   () => setPokemon({ name: res.name, move: res.moves[0].move.name }),
          //   1000
          // )
          setPokemon({ name: res.name, move: res.moves[0].move.name })
        );
    },
  });
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <label>
            Pokemon
            <input
              name="pokemonName"
              onChange={handleChange}
              value={values.pokemonName}
            />
          </label>
          <button type="submit">Gotta catch 'em all</button>
        </form>
        {pokemon && pokemon.move}
      </header>
    </div>
  );
}

export default App;
