import { useState, useEffect } from "react";
import Card from "./Cards.js";

function FetchData() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://rickandmortyapi.com/api/character/");
      const json = await data.json();
      setData(json.results);
      console.log(json.results);
    };

    fetchData().catch((error) => {
      setError(error);
    });
  }, []);

  return (
    <div>
      {data ? (
        data.map((character, i) => {
          return (
            <div key={i}>
              <p>{character.name}</p>
              <Card character={character} />
            </div>
          );
        })
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
}

export default FetchData;
