import React, { useState } from "react";
// import { Link, Route } from 'react-router-dom';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

import { axiosWithAuth } from '../utils/axiosWithAuth';

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  const fetchColors = () => {
    axiosWithAuth()
      .get(`/colors`)
      .then(res => setColorList(res.data))
      .catch(err => console.log('Ahhhh BUG', err));
  };

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} fetchColors={fetchColors} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
