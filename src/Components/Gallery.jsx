import React from 'react'
const Gallery=props=>{
    return(
        <div class="column">
          {props.imageData.map((image)=>{
            return(
              <div key={image.id} className="column">
                <img src={image.img} height="300px" width="100%"></img>
              </div>
            )
          })}
      </div>
    )
  }
  export default Gallery