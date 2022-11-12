export default function QuoteMachine() {
  return (
    <div id="quote-box" className="container" style={{maxWidth: "600px"}}>
      <div className="card p-5">
        <p id="text" className="text-center text-primary" style={{fontSize: "200%"}}>
          <i class="fa-solid fa-quote-left"></i> A person who never made a mistake never tried anything new.
        </p>

        <p id="author" className="text-end text-primary">- John Doe</p>

        <div className="d-flex justify-content-between" >
          <div className="d-flex gap-1">
            <button className="btn btn-primary">
                <a href="https://www.twitter.com/intent/tweet" id="tweet-quote"><i className="fa-brands fa-twitter" style={{color:"white"}}></i></a>
            </button>
            <button className="btn btn-primary">
                <a href="https://www.twitter.com/intent/tweet" id="tweet-quote"><i className="fa-brands fa-tumblr" style={{color:"white"}}></i></a>
            </button>
          </div>
          <button id="new-quote" className="btn btn-primary">New Quote</button>
        </div>
      </div>      
    </div>
  )
}