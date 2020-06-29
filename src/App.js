import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const imaggaKey = process.env.REACT_APP_IMAGGA_KEY;
const testImage = 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?ixlib=rb-1.2.1&w=1000&q=80';
const randomAnimal = 'https://source.unsplash.com/1600x900/?animal'

function App() {
  const [image, setImage] = useState('');
  const [tags, setTags] = useState('');

  console.log(imaggaKey);

  useEffect(() => {

    async function getImageTags() {

      try {
        const response1 = await axios.get(`${randomAnimal}`);
        setImage(response1.request.responseURL);
        const response2 = await axios.get(`https://api.imagga.com/v2/tags?image_url=${response1.request.responseURL}`,
          { 
            headers: {
              Authorization: `Basic ${imaggaKey}`
            } 
          }
        );
      setTags([response2.data.result.tags[0],response2.data.result.tags[1] ]);
      }catch(e){
        console.log(e);
      }
    };
    getImageTags();
  },[]);

  return (
    <div className="App">
      {tags && tags[0].tag.en +' '+tags[1].tag.en}
      <img src={image} style={{height: '200px'}}></img>
    </div>
  );
}

export default App;
