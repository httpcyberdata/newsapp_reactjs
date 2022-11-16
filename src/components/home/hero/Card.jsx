import React from 'react'

export const Card = ({ item: {id, cover, category, title, authorName, authorImg, time}}) => {
  return (
    <div>
        <div className="box">
            <div className="img">
                <img src={cover} alt="" />
            </div>
        </div>
    </div>
  )
} 
