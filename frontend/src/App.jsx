import { useState } from 'react'
import './App.css'

function App ()
{
  const [url, setUrl] = useState();

  return (
    <div className='body'>
      <div className='title'>
        URL Shrink
      </div>

      <div className='detail-container'>
        <input type="text" className='input-area' placeholder='Paste the URL here'/>

        <div className='button'>
          Shorten URL
        </div>
      </div>
    </div>
  )
}

export default App
