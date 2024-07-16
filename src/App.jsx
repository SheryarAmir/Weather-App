import { useState } from 'react'
import Weather from './Compounents/Weather'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">

<Weather/>

    </div> 

    </>
  )
}

export default App
