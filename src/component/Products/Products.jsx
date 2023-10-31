import React, { useState , useEffect } from 'react'

function Products() {
  let [Product,setProduct]=useState([]);
  const fetchProducts=(async()=>{
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    setProduct(data);
  });
  useEffect(() => {
    fetchProducts();
  });
  return (
    <>
        <div className='row'>{Product.map((p)=> (
            <div className='col-md-6' key={p.id}>
                <h1>{p.name}</h1>
                <img src={p.image} alt={p.name} />
                <p>{p.description}</p>
            </div>
        ))}</div>
    </>
  )
}

export default Products