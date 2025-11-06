import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {

  const [Product, setProduct] = useState([]);
  const [AddedItems,setCart] = useState([]);
  const Products = function () {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log("Error Occurred", error);
      })
      }

  const AddedToCart = function (item) {
    console.log("item",item);
    console.log("Added to Cart");
    axios.post("https://jsonplaceholder.typicode.com/comments",item)
      .then((response)=>{
        console.log("Data Submitted",response.data);
        setCart(response.data);
      })
      .catch((error)=>{
        console.log("Error Occurred",error);
      })
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
            <button onClick={() => AddedToCart(data)}>Add to Cart</button>
          </div>
        ))
      }
      </div>


    </>
  )
}

export default App
