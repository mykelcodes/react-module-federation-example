import React, { useState } from 'react'

const Counter = ({ buttonTitle }) => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h4>Count is {count}</h4>
      <button onClick={() => setCount((prev) => prev + 1)}>
        {buttonTitle || 'Start Counting'}
      </button>
    </div>
  )
}

export default Counter
