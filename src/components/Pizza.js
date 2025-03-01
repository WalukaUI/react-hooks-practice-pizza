import React from "react";

function Pizza({ pizza, handleEdit }) {
  function changePizza(e) {
    e.preventDefault()
    handleEdit(pizza)
  }
  return (
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{pizza.vegetarian?"Yes":"No"}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={(e) => changePizza(e)}>
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
