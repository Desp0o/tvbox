import React from 'react'
import './featureBlock.css'

export default function FeatureBlock({number, image, title, desc}) {
  return (
    <div className="featureBlock">
        <div className="featureBlock_inner">
            <div className="block_upper">
                <p className="feat_number">{number}</p>
                <div className="featureBlock_circle">
                    <img src={image} alt="fetures" className="feature_icon"/>
                </div>
                <p>{title}</p>
            </div>
            <p>{desc}</p>
        </div>
    </div>
  )
}