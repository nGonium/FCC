export default function QuoteBlock({ quote }) {
  return (
    <blockquote className="blockquote">
      <p id="text" className="text-center text-primary" style={{fontSize: "200%"}}>
        <i class="fa-solid fa-quote-left"></i> {quote.text}
      </p>
      <footer id="author" className="blockquote-footer text-end">{quote.author || "Unknown"}</footer>
    </blockquote>
  )
}