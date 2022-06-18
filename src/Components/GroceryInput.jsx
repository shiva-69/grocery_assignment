import React from 'react'
import "../styles/GroceryInput.css"

const GroceryInput = ({ handleAdd }) => {
  const [inputvalue, setInputValue] = React.useState("");

  const handleInputValue = (e) => {
    const { value } = e.target;
    setInputValue(value);
  }
  const handleClickButton = () => {
    handleAdd(inputvalue);
    setInputValue("");
  }
  return (<>
    <input type="text" placeholder='Write Grocery' onChange={handleInputValue} value={inputvalue} />
    <button onClick={handleClickButton} > Add item</button>
  </>
  )
}

export { GroceryInput }