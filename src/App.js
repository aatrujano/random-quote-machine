// STYLE
import './App.css';

// HOOKS
import { useState, useEffect } from 'react';

// COMPONENTS
import Quote from './Quote';

function App() {
  const [quotes, setQuotes] = useState([]);
  const init = {
    method: 'GET',
    headers: new Headers({ 'Content-type': 'application/json',}),
    mode: 'no-cors'
  };

  useEffect(() => {
    fetch('https://zenquotes.io/api/quotes', init)
      .then((response) => response.json())
      .then((jsonResponse) => setQuotes(jsonResponse));
  }, []);

  console.log(quotes);

  return (
    <div className='App'>
      <Quote />
    </div>
  );
}

export default App;
