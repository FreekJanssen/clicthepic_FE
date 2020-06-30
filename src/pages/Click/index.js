import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { selectLanguage } from '../../store/appState/selectors';


export default function Click() {
  const [state, setState] = useState({})
  const [randomTag, setRandomTag] = useState([]);
  const [msg, setMsg] = useState('');
  const [count, setCount] = useState(1);
  const [score, setScore] = useState(0);

  const imaggaKey = process.env.REACT_APP_IMAGGA_KEY;
  const randomAnimal = 'https://source.unsplash.com/500x300/?animal';
  const randomFood = 'https://source.unsplash.com/500x300/?food';
  const randomClothes = 'https://source.unsplash.com/500x300/?clothes';
  const language = useSelector(selectLanguage);

  const axiosConfig = { 
    headers: { Authorization: `Basic ${imaggaKey}` },
    params: { limit: 3, language: language }
  };

  useEffect(() => {

    async function getImageTags() {

      try {
        //get 3 random images, 1 of each category
        const imageResponses = await Promise.all([
          await axios.get(`${randomAnimal}`),
          await axios.get(`${randomFood}`),
          //await axios.get(`${randomClothes}`)
        ]);
        //get the actual URLs in an array
        const imageURLS = imageResponses.map(res => res.request.responseURL);

        //Generate tags for the random images using Imagga
        const tagsResponses = await Promise.all([
          axios.get(`https://api.imagga.com/v2/tags?image_url=${imageURLS[0]}`, axiosConfig),
          axios.get(`https://api.imagga.com/v2/tags?image_url=${imageURLS[1]}`, axiosConfig),
          //axios.get(`https://api.imagga.com/v2/tags?image_url=${imageURLS[2]}`, axiosConfig)
        ]);
        console.log(tagsResponses);
        //create arrays with tags
        const imageTags = tagsResponses.map(res => res.data.result.tags);
        const animalTags = imageTags[0].map(tag => tag.tag[language]);
        const foodTags = imageTags[1].map(tag => tag.tag[language]);
        const tagArray = [...animalTags, ...foodTags];

        //grab a random index of the tags array
        setRandomTag(tagArray[Math.floor(Math.random() * tagArray.length)]);

        setState({
          animal: { url: imageURLS[0], tags: [...animalTags] },
          food: { url: imageURLS[1], tags: [...foodTags] }
          //clothes: { url: imageURLS[2], tags: imageTags[2] }
        });
        
      }catch(e){
        console.log(e);
      };
    };
    getImageTags();
  },[count]);

  function nextRound(){
    setCount(count+1);
    setMsg('');
  }
  function clickedImage(e){
    if(msg) return;
    if(state[e.target.alt].tags.includes(randomTag)) {
       setMsg('Correct!');
       setScore(score+1);
    }
    else setMsg('Incorrect');
  }
  if(!state.animal) return <div>Loading..</div>;
  if(count >= 6) return <div><h1>Finished! <br/>Your Score: {score}/5</h1></div>

  return (
    <div>
      <h1>Click the Pic -- Round {count}/5</h1>
      <h1>{randomTag}</h1>
      <img src={state.animal.url} alt='animal' onClick={clickedImage}/>
      <img src={state.food.url} alt='food' onClick={clickedImage}/>
      <h2>{msg}</h2>
      <button onClick={nextRound}>NEXT</button>
    </div>
  );
}
