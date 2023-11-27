/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import ProductRow from "../ProductRow/ProductRow";
import './ProductTable.css'

export default function ProductTable({products,deletProduct}) {
  return (
    <>
    <div className="table-container">
        <table className="table">
          <thead className="thead">
            <tr className="tr">
              <th>Id</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity </th>
              <th>Description</th>
              <th>Colore</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="body">
            {products.map((product) => (
              <ProductRow deletProduct={deletProduct} product={product} key={product.id}/>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
