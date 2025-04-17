import React from 'react'


function ProductCard({name, description, image, avgRating, totalRatings}) {
  
  return (
    <>
    <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <img src={image} alt="img" />
        <p>{avgRating}</p>
        <p>{totalRatings}</p>
    </div>
    </>
  )
}

export default ProductCard