/* eslint-disable react/prop-types */
import { MdDelete } from "react-icons/md";

export default function ProductRow({product,deletProduct}) {

  const {name,id,price,quantity,description,select} = product
  return (
    <>
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{description}</td>
            <td>{select}</td>
            <td onClick={()=>deletProduct(id)}>
            <MdDelete />
            </td>   
        </tr>
    </>
  )
}
