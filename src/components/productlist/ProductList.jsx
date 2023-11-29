/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./ProductList.css";

export default function ProductList({ products, setProducts }) {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [select, setSelect] = useState("");

  const inputHandeler = (e) => {
    e.preventDefault("");
    const ifSameId=products.filter(product=>product.id===id);
    if (ifSameId.length>=1) {
      return alert('same id not alled')
    }
    const prductslist = {
      name,
      id,
      price,
      quantity,
      description,
      select
    };
    setProducts([...products, prductslist]);
    cleareInput();
  };
  const cleareInput = () => {
    setName("");
    setId("");
    setPrice("");
    setQuantity("");
    setDescription("");
    setSelect("");

  };

  return (
    <>
      <div className="form-containet">
        <form className="product-form" action="Submit" onSubmit={inputHandeler}>
          <div className="div">
          <label>Id</label>
          <input              
              placeholder="please give a number"
              type="text"
              value={id}
              maxLength={5}
              onChange={(e) => setId(e.target.value)}
              required
              />
              
          </div>
          <div className="div">
            <label>Product Name</label>
            <input
              maxLength={15}
              placeholder="Producet"        
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="div">
            <label>Price</label>
            <input
              maxLength={6}
              placeholder="please give a number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="div">
            <label>Quantity</label>
            <input
              type="text"
              maxLength={3}
              placeholder="please give a number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </div>
          <div className="div">
            <label>Description</label>
            <input
              maxLength={15}
              placeholder="Description"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <select name="select" id="select"
          onChange={(e) => setSelect(e.target.value)}>
            <option value={""}>Select a colure</option>
            <option value={"Red"}>Red</option>
            <option value={"Blue"}>Blue</option>
            <option value={"Yallow"}>Yallow</option>
          </select>
          <input type="submit" className="submit" value="Submit" required/>
        </form>
      </div>
    </>
  );
}
