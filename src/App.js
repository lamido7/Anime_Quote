import React from "react";
import data from "./data";
import Card from "./Card";

function App() {
  function getQuote() {
    const randoQoute = data[Math.floor(Math.random() * data.length)];
    return randoQoute;
  }

  const [quote, setQuote] = React.useState(getQuote);

  function newQuote() {
    setQuote(getQuote);
  }

  const cards = <Card quote={quote} newQuote={newQuote} />;

  return <div>{cards}</div>;
}

export default App;
