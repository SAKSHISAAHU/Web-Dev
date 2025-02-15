import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // Case1
  // eg- let a= 0
  // const a = useRef(0)

  // useEffect(() => {
  //   // eg- a=a+1
  //   a.current=a.current+1
  //   console.log(`the value of ${a.current}`)
  // })

  // case2 
  const btnref = useRef()
  useEffect(() => {
    console.log("changing");
    btnref.current.style.backgroundColor = "red"
  }, [])

  return (
    <>
      <div className="card">
        <button ref={btnref} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
