import { useState } from "react"
import { useEffect } from "react"
import { useRef } from "react"
import DrumPad from "./DrumPad"

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
    const audio = audioRefs.current[key]
    if (audio.paused) {
      audio.play()
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
    <div id="drum-machine" className="container p-3 my-4 bg-dark rounded" style={{maxWidth: "400px"}}>
        <p 
          id="display" 
          className="form-control form-control-lg">{currentPlaying}</p>
        <div className="d-grid gap-2" style={{gridTemplateColumns: "1fr 1fr 1fr"}}>
        {drumpads.map( ({ file, key }) => (
          <DrumPad 
            file={file}
            key={key}
            kbd={key}
            refs={audioRefs}
            clickHandler={() => playAudio(key, file)} />
        ) )}
      </div>
    </div>
  )
}

export default DrumMachine