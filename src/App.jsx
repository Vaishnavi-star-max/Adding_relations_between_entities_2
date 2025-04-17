import React, { useState } from 'react';
import ProductCard from './components/ProductCard';
import './App.css';
import RatingWidget from './components/RatingWidget';

const initialProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High-quality sound with noise cancellation.",
    image: "https://picsum.photos/300/200?random=1",
    avgRating: 4.2,
    totalRatings: 10
  },
  {
    id: 2,
    name: "Smartwatch",
    description: "Track your fitness and notifications.",
    image: "https://picsum.photos/300/200?random=2",
    avgRating: 3.8,
    totalRatings: 15
  },
  {
    id: 3,
    name: "Portable Speaker",
    description: "Powerful sound in a compact design.",
    image: "https://picsum.photos/300/200?random=3",
    avgRating: 4.5,
    totalRatings: 8
  }
];

function App() {

  const [products, setProducts] = useState(initialProducts);
  const updateratings=(productId,rating) =>{
      const updatedrting =  products.map((product)=>{
        if(product.id===productId){
          product.totalRatings = product.totalRatings+1;
          product.avgRating = (((product.avgRating*product.totalRatings)+rating)/product.totalRatings).toFixed(1);
        }
        return product;
       })
       console.log(updatedrting)
       setProducts(updatedrting)
      
  }
 

  return (
    <div>
      <h1>Product List</h1>
      <div className="product-list">
        {products.map(product => (
            <div>
               <ProductCard key={product.id} {...product}/>
               <RatingWidget productId={product.id} updaterating ={updateratings} />
            </div>
        
        ))}
      </div>
    </div>
  );
}


export default App;
