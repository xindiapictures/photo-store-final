
import { useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('Welcome to the Photo Store!')

  return (
    <div>
      <h1>{message}</h1>
      <img src="/photo.jpg" alt="Sample" width="300" />
    </div>
  )
}

export default App
