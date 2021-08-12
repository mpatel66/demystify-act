import React from "react";
import "./App.css";
import { useFormik } from "formik";

function App() {
  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: { pokemonName: "" },
    onSubmit: () => {},
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
      </header>
    </div>
  );
}

export default App;
