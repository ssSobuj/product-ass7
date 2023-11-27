import { useEffect, useState } from "react";
import ProductList from "../productlist/ProductList";
import ProductTable from "./../productTable/ProductTable";
import "./Products.css";
import getDataLocalStorage from "./Prosucts";


export default function Products() {
  const [products, setProducts] = useState(getDataLocalStorage(
    'products'
  ));

  const deletProduct = (id) => {
    const deleletl = products.filter((val) => val.id !== id);
    setProducts(deleletl);
  };

  useEffect(() => {
    localStorage.setItem("products",JSON.stringify(products));
  },[products]);
    
  return (
    <>
      <div className="main-div">
        <ProductList products={products} setProducts={setProducts} />
        <ProductTable deletProduct={deletProduct} products={products} />
      </div>
    </>
  );
}
