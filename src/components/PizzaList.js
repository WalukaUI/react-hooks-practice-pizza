import React from "react";
import Pizza from "./Pizza";

function PizzaList({pizza,handleEdit}) {
  const populatePizzas=pizza.map((e)=><Pizza key={e.id} pizza={e}  handleEdit={handleEdit}/>)
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          populatePizzas
        }
      </tbody>
    </table>
  );
}

export default PizzaList;
