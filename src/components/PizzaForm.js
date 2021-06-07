import React from "react";


function PizzaForm({editPizza, setSelected, handleSubmit}) {

  function handlechange(e){
  e.preventDefault()
  setSelected({...editPizza,[e.target.name]:e.target.value})
  }
function handleRadiochange(x){
  x.preventDefault()
  setSelected({...editPizza,[x.target.name]:x.target.value==="Vegetarian"})
}

function submitnewPizza(e){
  e.preventDefault()
  handleSubmit(editPizza)
}
 if(!editPizza)return null
 const { topping, size, vegetarian } = editPizza;
 
  return (
    <form onSubmit={(e)=>submitnewPizza(e)}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            value={topping}
            placeholder="Pizza Topping"
            onChange={(e)=>handlechange(e)}
          />
        </div>
        <div className="col">
          <select className="form-control" value={size} name="size" onChange={(e)=>handlechange(e)}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col" >
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={vegetarian}
              onChange={(e)=>handleRadiochange(e)}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={!vegetarian}
              onChange={(e)=>handleRadiochange(e)}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
