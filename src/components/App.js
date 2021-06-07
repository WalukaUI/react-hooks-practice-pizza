import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
const[pizza,setPizza]=useState([])
const[editPizza,setEditPizza]=useState(null)
const URL="http://localhost:3001/pizzas"

useEffect(()=>{
  fetch(URL,{methord:"GET"})
  .then(r=>r.json())
  .then(j=>setPizza(j))
},[])

function  handleSubmit(pizzasN){
  const requestOptions = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(pizzasN)
};
  fetch(`${URL}/${pizzasN.id}`,requestOptions)
  .then(r=>r.json())
  .then(j=>{
    let newPizzas=pizza.filter((e)=>e.id!==pizzasN.id)
    let sort=([...newPizzas,j])
    let sorted=sort.sort((a,b)=> a.id - b.id)
    setPizza(sorted)
  })
}
  return (
    <>
      <Header />
      <PizzaForm editPizza={editPizza} setSelected={setEditPizza}  handleSubmit={ handleSubmit}/>
      <PizzaList pizza={pizza} handleEdit={setEditPizza} />
    </>
  );
}

export default App;
