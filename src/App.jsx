import Cards from "./components/cards/Cards";

import { useEffect } from "react";
import { useState } from "react";

function App() {

  const [cards, setCards] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(" https://restcountries.com/v3.1/all");
        const data = await res.json();
        setCards(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const visitedCountry = (card) => {
    setVisitedCountries([...visitedCountries, card])
   
  }

  return (
    <>
      <h1 className="text-2xl font-bold text-center my-10">React World Tour</h1>
      <Cards cards={cards} visitedCountry = {visitedCountry} visitedCountries = {visitedCountries}></Cards>
    </>
  );
}

export default App;
