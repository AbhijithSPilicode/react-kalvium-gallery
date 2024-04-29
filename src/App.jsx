import React from 'react';
import './App.css';
import elephant from "./images/elephant.jpeg";
import Gallery from './Components/Gallery';

const imageData = [
  {
    id: 1,
    url: elephant
  },
  {
    id: 2,
    url: elephant,
  },
  {
    id: 3,
    url: elephant,
  },
  {
    id: 4,
    url: elephant,
  }
];

function App(){
  return (
    <div>
      <h1>My Gallery</h1>
      <Gallery images={imageData} />
    </div>
  );
};
export default App;
