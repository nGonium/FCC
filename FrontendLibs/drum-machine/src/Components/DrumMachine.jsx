import { useState } from "react"
import { useEffect } from "react"
import { useRef } from "react"

const drumpads = [
  {
    file: "Heater-1",
    key: "Q",
  },
  {
    file: "Heater-2",
    key: "W",
  },
  {
    file: "Heater-3",
    key: "E",
  },
  {
    file: "Heater-4",
    key: "A",
  },
  {
    file: "Clap",
    key: "S",
  },
  {
    file: "Open-HH",
    key: "D",
  },
  {
    file: "Kick-n-Hat",
    key: "Z",
  },
  {
    file: "Kick",
    key: "X",
  },
  {
    file: "Closed-HH",
    key: "C",
  },
]

const DrumMachine = () => {
  const [currentPlaying, setCurrentPlaying] = useState(null)
  const audioRefs = useRef({})

  const playAudio = (key, filename) => {
    audioRefs[key].play()
    setCurrentPlaying(filename.replace('-', ' '))
  }

  useEffect(() => {
    const keydownHandler = (e) => {
      const keydown = drumpads.find(({key}) => key === e.key.toUpperCase())
      if (keydown) {
        playAudio(keydown.key, keydown.file)
      }
    }

    document.addEventListener("keydown", keydownHandler)
    return () => document.removeEventListener('keydown', keydownHandler)
  }, [])
  
  return (
    <div id="drum-machine" className="container">
        <div 
          id="display" 
          className="form-control">
          {currentPlaying}
        </div>
        <div className="d-grid m-auto gap-1" style={{gridTemplateColumns: "1fr 1fr 1fr", maxWidth: "400px"}}>
        {drumpads.map( ({ file, key }) => (
        <div
          id={`drumpad-${file}`}
          onClick={() => playAudio(key, file)}
          className="drum-pad btn btn-primary">
          <audio 
            ref={(el) => audioRefs[key] = el}
            id={key}
            className="clip" 
            type="audio/mpeg"
            src={`/audio/${file}.mp3`}></audio>
            {key}
        </div>
      ) )}
    </div>
    </div>
  )
}

export default DrumMachine