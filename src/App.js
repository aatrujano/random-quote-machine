// STYLE
import './App.css';

// HOOKS
import { useState, useEffect } from 'react';

// COMPONENTS
import Quote from './Quote';

function App() {
  const [allQuotes, setAllQuotes] = useState([]);
  const [currentQuote, setCurrentQuote] = useState(null);
  

  useEffect(() => {
    fetch('https://type.fit/api/quotes')
      .then((response) => response.json())
      .then((jsonResponse) => {
        setAllQuotes(jsonResponse);
        setCurrentQuote(jsonResponse[0]);
      });
  }, []);

  const getQuote = () => {
    const randomIndex = Math.floor(Math.random() * allQuotes.length);
    const newQuote = allQuotes[randomIndex];
    setCurrentQuote(newQuote);
  };

  return (
    <div className='App'>
      <Quote
        allQuotes={allQuotes}
        currentQuote={currentQuote}
        getQuote={getQuote}
      />
    </div>
  );
}

export default App;
