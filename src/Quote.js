// STYLE
import './Quote.css'

const Quote = (props) => {
    return(
        <div className='quoteContainer'>
            <h2 className='quote'><span>"</span>Quote<span>"</span></h2>
            <p className='author'>- Authors Name</p>
            <div className='ctaContainer'>
                <button className='button b1 twitter'>twitter</button>
                <button className='button b1 tumblr'>tumblr</button>
                <button className='button b2 getNewQuote'>New quote</button>
            </div>
        </div>
    )
}

export default Quote;