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
    const audio = audioRefs[key]
    if (audio.paused) {
      audioRefs[key].play()
      setCurrentPlaying(filename.replaceAll('-n-', ' \'n ').replaceAll('-', ' '))  
    } else {
      audio.currentTime = 0
    }
  }

  useEffect(() => {
    const keydownHandler = (e) => {
      const keydown = drumpads.find(({key}) => key === e.key.toUpperCase())
      if (keydown) {
        playAudio(keydown.key, keydown.file)
      } else {
        setCurrentPlaying(`No audio for "${e.key}"`)
      }
    }

    document.addEventListener("keydown", keydownHandler)
    return () => document.removeEventListener('keydown', keydownHandler)
  }, [])
  
  return (
    <div id="drum-machine" className="container p-2 my-4 bg-dark rounded d-flex flex-column gap-1" style={{maxWidth: "400px"}}>
        <div 
          id="display" 
          className="form-control">
          {currentPlaying}
        </div>
        <div className="d-grid w-100 gap-1" style={{gridTemplateColumns: "1fr 1fr 1fr"}}>
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