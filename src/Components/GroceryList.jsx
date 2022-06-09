import React from 'react'

const GroceryList = ({list, handleDelete}) => {
  return (
    <>
        {list.map((item) =>{
            return <>
                <div>
                <h2 style={{display :"inline-block", marginRight:" 10px" }}> {item.value}</h2>
                <button  onClick={()=> handleDelete(item.id)}>Delete</button>
                </div>
            </>
        })}
    </>
  )
}

export {GroceryList}