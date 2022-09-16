import React from 'react'
import './App.css'

import { useCounter } from 'remoteApp/useCounter'

const Counter = React.lazy(() => import('remoteApp/Counter'))

function App() {
  const { count, handleChange } = useCounter()

  return (
    <div className="App">
      <h1>HOST APP</h1>
      <span>{count}</span>
      <button onClick={handleChange}>Start</button>
    </div>
  )
}

export default App
