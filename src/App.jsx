import React from 'react';
import './App.css';
import elephant from "./images/elephant.jpeg";
import Gallery from './Components/Gallery';

const imageData = [
  {
    id:1,
    img:elephant
  },
  {
    id:2,
    img:elephant
  },
  {
    id:3,
    img:elephant
  },
  {
    id:4,
    img:elephant
  }
]

function App() {
  return (
    <div class="title">Kalvium Gallery
      <div>
        {
          imageData.map(image=>{
            return(
              <div key={image.id} className="column">
                <img src={image.img} height="400px" width="600px"></img>
              </div>
            )
          })
        }
      </div>
    </div>  
  )
}

export default App;
