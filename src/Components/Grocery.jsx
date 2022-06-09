import React from "react";
import {GroceryList} from "./GroceryList";
import {GroceryInput} from "./GroceryInput";
import {v4 as uuid} from "uuid";


const Grocery = () => {
    const [list, setList] = React.useState([]);


    const handleAdd = (value) => {
        const payload = {
            value,
            id: uuid()
        }
        const updatedList = [...list, payload];
        setList(updatedList);   
    }


    const handleDelete = (id) => {
        const updatedList = list.filter((item)=> item.id !== id);
        setList(updatedList);
    }


    return <>
    <h1>Grocery</h1>
    <GroceryInput handleAdd={handleAdd}/>
    <GroceryList list ={list} handleDelete={handleDelete}/>
    </>

}


export {Grocery}