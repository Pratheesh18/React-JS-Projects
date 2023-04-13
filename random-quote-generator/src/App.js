import React from 'react';
import {useState,useEffect} from 'react';
import './App.css';

const getRandomQuote = (quotes) => {
  return quotes[Math.floor(Math.random() * quotes.length)];
}


const App = () => {

  const [quotes,setQuotes] = useState([]);
  const [quote , setQuote] = useState(null);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
        .then((res) => res.json())
        .then((json) => {
          setQuotes(json);
          setQuote(json[0]);
        })
  },[]);  //if we keep the dependency array empty it will run only once and not again

  const getNewQuote = () => {
    setQuote(getRandomQuote(quotes));
  }


  return(
    <main>
      <h1>  Quote Generator </h1>
      <section>
        <button className='btn1' onClick={getNewQuote}>  New Quote </button>
        <h3>
          <span> " </span>
           {quote?.text} {/*using optional chaining operator */}
        </h3>
        <i> {quote?.author} </i>
      </section>
    </main>
  );
};

export default App;