import React, { useState, useEffect } from "react";
// import { Link, Route } from 'react-router-dom';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

import { axiosWithAuth } from '../utils/axiosWithAuth';

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
    useEffect(() => {
      axiosWithAuth()
        .get(`/colors`)
        .then(res => {
          setColorList(res.data)
        })
        .catch(err => console.log('Ahhhh BUG', err));
           
    }, [])

// console.log(colorList)

  return (
    <div className='bubblePage'>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </div>
  );
};

export default BubblePage;
