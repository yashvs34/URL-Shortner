import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import ShortURLComponent from './components/ShortURLComponent';

function App ()
{
  const [url, setUrl] = useState();

  useEffect((() => {
    axios.get('https://url-shortner-s1t7.onrender.com/');
  }), []);

  return (
    <div className='body'>
      <div className='title'>
        URL Shrink
      </div>

      <div className='detail-container'>
        <input type="text" className='input-area' placeholder='Paste the URL here' onKeyDown={(event) => {
          setUrl(event.target.value);
        }}/>

        <div className='button' onClick={() => {
          axios.post('https://url-shortner-s1t7.onrender.com/shorten', {
            url : url
          })
          .then((response) => {
            response ? <></> : <ShortURLComponent shortUrl = {response} />
          });
        }}>
          Shorten URL
        </div>
      </div>
    </div>
  )
}

export default App
