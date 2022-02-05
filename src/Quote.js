// STYLE
import './Quote.css';

const Quote = ({ allQuotes, currentQuote, getQuote }) => {
  return (
    <div id='quote-box' className='container'>
     <div className='currentQuoteContainer'>
          {currentQuote && (
            <h2 id='text' className='quote'>
              <span>"</span>
              {currentQuote.text}
              <span>"</span>
            </h2>
          )}
          {currentQuote && (
            <p id='author' className='author'>
              - {currentQuote.author ? currentQuote.author : 'Anonymous'}
            </p>
          )}
     </div>
      <div className='ctaContainer'>
        <a href='twitter.com/intent/tweet' id='tweet-quote' className='button b1 twitter'>twitter</a>
        <button className='button b1 tumblr'>tumblr</button>
        <button id='new-quote' className='button b2 getNewQuote' onClick={getQuote}>
          New quote
        </button>
      </div>
    </div>
  );
};

export default Quote;
