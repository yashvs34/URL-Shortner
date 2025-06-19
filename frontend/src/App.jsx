import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import ShortURLComponent from './components/ShortURLComponent';

function App ()
{
  const [url, setUrl] = useState("");
  const [response, setResponse] = useState();

  useEffect((() => {
    axios.get('https://url-shortner-s1t7.onrender.com/');
  }), []);

  return (
    <div className='body'>
      <div className='title'>
        URL Shrink
      </div>

      <div className='detail-container'>
        <input type="text" className='input-area' placeholder='Paste the URL here' onChange={(event) => {
          setUrl(event.target.value);
        }}/>

        <div className='button' onClick={() => {
          console.log(url.length);
          console.log(typeof url);
          axios.post('https://url-shortner-s1t7.onrender.com/shorten', {
            url : url
          })
          .then((response) => {
            console.log(response);
            setResponse(response);
          });
        }}>
          Shorten URL
        </div>
      </div>
      
        <div>
          {response ? <ShortURLComponent shortUrl={response.data.shortUrl} message={response.data.message} /> : <></>}
        </div>
    </div>
  )
}

export default App
