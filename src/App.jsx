import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 p-4 text-3xl'>Hello world</h1>
    </>
  )
}

export default App
