import { useState } from "react"
import QuoteBlock from "./QuoteBlock"

const quoteList = [
  {
    "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
    "author": "Thomas Edison"
  },
  {
    "text": "You can observe a lot just by watching.",
    "author": "Yogi Berra"
  },
  {
    "text": "A house divided against itself cannot stand.",
    "author": "Abraham Lincoln"
  },
  {
    "text": "Difficulties increase the nearer we get to the goal.",
    "author": "Johann Wolfgang von Goethe"
  },
  {
    "text": "Fate is in your hands and no one elses",
    "author": "Byron Pulsifer"
  },
  {
    "text": "Be the chief but never the lord.",
    "author": "Lao Tzu"
  },
  {
    "text": "Nothing happens unless first we dream.",
    "author": "Carl Sandburg"
  },
  {
    "text": "Well begun is half done.",
    "author": "Aristotle"
  },
  {
    "text": "Life is a learning experience, only if you learn.",
    "author": "Yogi Berra"
  },
  {
    "text": "Self-complacency is fatal to progress.",
    "author": "Margaret Sangster"
  },
  {
    "text": "Peace comes from within. Do not seek it without.",
    "author": "Buddha"
  },
  {
    "text": "What you give is what you get.",
    "author": "Byron Pulsifer"
  },
  {
    "text": "We can only learn to love by loving.",
    "author": "Iris Murdoch"
  },
  {
    "text": "Life is change. Growth is optional. Choose wisely.",
    "author": "Karen Clark"
  },
  {
    "text": "You'll see it when you believe it.",
    "author": "Wayne Dyer"
  },
  {
    "text": "Today is the tomorrow we worried about yesterday.",
    "author": null
  },
  {
    "text": "It's easier to see the mistakes on someone else's paper.",
    "author": null
  },
  {
    "text": "Every man dies. Not every man really lives.",
    "author": null
  },
  {
    "text": "To lead people walk behind them.",
    "author": "Lao Tzu"
  },
  {
    "text": "Having nothing, nothing can he lose.",
    "author": "William Shakespeare"
  },
  {
    "text": "Trouble is only opportunity in work clothes.",
    "author": "Henry J. Kaiser"
  },
  {
    "text": "A rolling stone gathers no moss.",
    "author": "Publilius Syrus"
  },
  {
    "text": "Ideas are the beginning points of all fortunes.",
    "author": "Napoleon Hill"
  },
  {
    "text": "Everything in life is luck.",
    "author": "Donald Trump"
  },
  {
    "text": "Doing nothing is better than being busy doing nothing.",
    "author": "Lao Tzu"
  }
]

export default function QuoteMachine() {
  const [quoteIndex, setQuoteIndex] = useState(0)
  const quote = quoteList[quoteIndex]
  const randomiseQuote = () => setQuoteIndex(Math.floor(Math.random() * quoteList.length))

  return (
    <div id="quote-box" className="container" style={{maxWidth: "600px"}}>
      <div className="card p-5">
        <QuoteBlock quote={quote} />
        <div className="d-flex justify-content-between" >
          <div className="d-flex gap-1">
            <button className="btn btn-primary mr-2">
                <a href={`https://www.twitter.com/intent/tweet?text=${quote.text} - ${quote.author}`} id="tweet-quote"><i className="fa-brands fa-twitter" style={{color:"white"}}></i></a>
            </button>
            <button className="btn btn-primary disabled">
                <a href="https://www.twitter.com/intent/tweet" id="tweet-quote"><i className="fa-brands fa-tumblr" style={{color:"white"}}></i></a>
            </button>
          </div>
          <button 
            id="new-quote" 
            className="btn btn-outline-primary" 
            onClick={randomiseQuote}>
            New Quote
          </button>
        </div>
      </div>      
    </div>
  )
}