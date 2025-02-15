// learning useEffect hook

import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState(0)

  // case1-Empty dependency array [] Runs only once 
  useEffect(() => {
      alert("hello there")
  }, [])

  // case2-No dependency array Runs on every render - means when ever count button click
  useEffect(() => {
    alert("hello again")
  })

  // case3-With dependencies [value] → Runs when certain value changes
  useEffect(() => {
    alert("color was changed")
  }, [color])
  // It runs with above both two cases because initially colour value is Initialise from 0.

  return (
    <>
      <Navbar color={"blue"}/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className="card">
        <button onClick={() => setColor((color) => color + 1)}>
          color is {color}
        </button>
      </div>
    </>
  )
}

export default App
