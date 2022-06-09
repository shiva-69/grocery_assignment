import React from 'react'

const GroceryList = ({list, handleDelete}) => {
  return (
    <>
        {list.map((item) =>{
            return <>
                <h1 key={item.id}> {item.value}</h1>
                <button  onClick={(e)=> handleDelete(item.id)}>Delete</button>
            </>
        })}
    </>
  )
}

export {GroceryList}