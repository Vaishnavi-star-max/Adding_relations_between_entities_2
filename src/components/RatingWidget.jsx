import {useState} from 'react';


function RatingWidget({productId,updaterating}) {
 const[ rating,setRating]= useState(0)

 const handleRating = (rating) => {
    setRating(rating);
    updaterating(productId,rating);
  };


  return (
    <div className='rating-widget'>
      {[1, 2, 3, 4, 5].map((ele) => (
        <div key={ele} className={ele<=rating?"ratingclicked":"rating"} onClick={() => handleRating(ele)}>
            
        </div>
      ))}
    </div>
  );
}

export default RatingWidget;