import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const handleIncrement=()=>{
    setCount(count+1)
  }
  const handleDecrement=()=>{
    if(count>0){
      setCount(count-1)
    }
  }
  const resetCount=()=>{
    setCount(0)
  }


  return (
    <>
    <h1>COUNTER-APP</h1>
      <button onClick={handleIncrement}>INCREMENT</button>
      <button onClick={handleDecrement}>DECREMENT</button>
      <button onClick={resetCount}>RESET</button>
      <div>
        <h2>THE VALUE OF COUNT IS {count}</h2>
      </div>
    </>
  )
}

export default App
