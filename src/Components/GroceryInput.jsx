import React from 'react'

const GroceryInput = ({handleAdd}) => {
    const [inputvalue, setInputValue] = React.useState("");

    const handleInputValue = (e) =>{
        const {value} = e.target;
        setInputValue(value);
    }
    
  return (<>
    <input type="text" placeholder='Write Grocery' onChange={handleInputValue} value={inputvalue}/>
    <button onClick={()=> handleAdd(inputvalue)}> Add item</button>
    </>
  )
}

export {GroceryInput}