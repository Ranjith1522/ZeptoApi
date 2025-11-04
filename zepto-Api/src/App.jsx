import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {

  const [Product, setProduct] = useState([]);
  const [AddedItems,AddToCart] = useState([]);
  const Products = function () {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setProduct(response.data);
      })
  }

  const AddedToCart = function () {
    console.log("Added to Cart");
  }

  
  return (
    <>
      <h3>Zepto App</h3>
      <button onClick={Products}>CLick to Fetch</button>
      <div className='main-container'> 
      
       {
      Product.map((data) => (
          <div className='card' key={data.id}>
            <p>{data.id}</p>
            <p>{data.title}</p>
            <button>Add to Cart</button>
          </div>
        ))
      }
      </div>


    </>
  )
}

export default App
