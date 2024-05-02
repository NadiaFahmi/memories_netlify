import React, { useState } from 'react'
import './PhotoItem.css'
import {assets} from '../Assets/All_image'

const PhotoItem = ({id,description,image}) => {
  // const [itemcount,setItemCount] =useState(0)
  return (
    <div className='photo-item'>
      <div className="photo-item-img-container">
        <img className='photo-item-image'src={image} alt=''/>
        {/* {
          !itemcount ?<img onClick={()=>setItemCount((prev)=>prev+1)}src={assets.add_icon_white} alt=''/>
          : <div>
            <p>{itemcount}</p>
          </div>
        }    
       */}
      </div>
      <div className="photo-item-info">
        <p className='photo-item-desc'>{description}</p>
      </div>

    </div>
  )
}

export default PhotoItem