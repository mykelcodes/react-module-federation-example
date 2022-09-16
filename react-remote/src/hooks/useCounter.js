import { useState } from 'react'

export const useCounter = () => {
  const [count, setCount] = useState(0)

  const handleChange = () => {
    setCount((prev) => prev + 1)
  }

  return { count, handleChange }
}
