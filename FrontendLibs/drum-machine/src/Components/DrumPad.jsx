const DrumPad = ({ file, kbd, refs, clickHandler }) => {
  return (
    <div
      id={`drumpad-${kbd}`}
      onClick={clickHandler}
      className="drum-pad btn btn-primary">
      <audio 
        ref={(el) => refs.current[kbd] = el}
        id={kbd}
        className="clip" 
        type="audio/mpeg"
        src={`/audio/${file}.mp3`} />
      {kbd}
    </div>
  )
}

export default DrumPad