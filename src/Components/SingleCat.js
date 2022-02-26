import React from 'react'
import './SingleCat.css'


export default function SingleCat({catDetails:{id, name, origin, temperament, description, image}}) {
  return (
    <div>
        <div className="singlecat_card">
          <div className='img_header'>
          <img src={image ? image.url: null} alt="" className='cat_image'/>
          </div>
              <div className='singlecat_card_body'>
                  <h2 className='cat_name'>{name}</h2>
                  <p className='cat_details'>
                      <span><strong>Origin:</strong> {origin}</span><br/>
                      <span><strong>Temperament:</strong> {temperament}</span><br/>
                      <span><strong>Description:</strong> {description}</span><br/>
                  </p>
              </div>
        </div>
    </div>
  )
}
