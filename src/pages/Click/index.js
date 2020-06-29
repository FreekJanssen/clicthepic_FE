import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function Click() {
  const [state, setState] = useState('');
  const [tagArray, setTagArray] = useState([]);

  const imaggaKey = process.env.REACT_APP_IMAGGA_KEY;
  const randomAnimal = 'https://source.unsplash.com/500x300/?animal';
  const randomFood = 'https://source.unsplash.com/500x300/?food';
  const randomClothes = 'https://source.unsplash.com/500x300/?clothes';
  const axiosConfig = { 
    headers: { Authorization: `Basic ${imaggaKey}` },
    params: { limit: 3 }
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
        //create arrays with tags
        const imageTags = tagsResponses.map(res => res.data.result.tags);
        const animalTags = imageTags[0].map(tag => tag.tag.en);
        const foodTags = imageTags[1].map(tag => tag.tag.en);

        setTagArray([...animalTags, ...foodTags]);

        setState([
          { animal: { url: imageURLS[0], tags: imageTags[0] } },
          { food: { url: imageURLS[1], tags: imageTags[1] } },
          //{ clothes: { url: imageURLS[2], tags: imageTags[2] } }
        ]);
        
      }catch(e){
        console.log(e);
      };
    };
    getImageTags();
  },[]);

  if(!state.animal.tags) return <div>Loading..</div>;
  return (
    <div>
      {state.map(category => {
        return <p><img src={category.url}/><br/>{category.tags.map(tag => <span>{tag.tag.en+' '}</span>)}</p>
      })}
    </div>
  );
}
