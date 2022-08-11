import React, { useState } from "react";

function PlantCard({ id, name, image, price }) {
  const [inStock, setInStock] = useState(true)

  const handleClickBtn = () => setInStock(!inStock)
  
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={handleClickBtn} className="primary">In Stock</button>
      ) : (
        <button onClick={handleClickBtn} >Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
