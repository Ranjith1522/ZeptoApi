import React from "react";
import "./MainDashboard.css";
import { useState } from "react";
import axios from 'axios';


function MainDashboard() {
    const [Product, setProduct] = useState([]);
    const [AddedItems, setCart] = useState([]);
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
        console.log("item", item);
        console.log("Added to Cart");
        axios.post("https://jsonplaceholder.typicode.com/comments", item)
            .then((response) => {
                console.log("Data Submitted", response.data);
                setCart(response.data);
            })
            .catch((error) => {
                console.log("Error Occurred", error);
            })
    }
    return (
        <>
            <button onClick={Products} style={{ color: 'red' }}>Click to Fetch</button>
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

export default MainDashboard;