import {createContext, useState, useEffect } from 'react'
import { json } from 'react-router-dom'
// Context lets the parent component make some information available to any component in the tree below it—no matter how deep—without passing it explicitly through props.

const TasqContext=createContext()

export const TasqProvider = ({children}) => {
    const [tasq, setTasq] = useState([])
    const [tasqEdit, setTasqEdit] = useState ({
        //the below are 2 default pieces of global state
        item: {},
        edit: false
        //when edit is not clicked, it's false. When clicked, it's "true".
    })

    useEffect(()=>{
        fetchTasq()
    }, [])

    //Fetch tasq
    const fetchTasq = async () => {
        const response = await fetch(`/tasq`)
        const data = await response.json()
        setTasq(data)
    }

    //Add tasq
    const addTasq = async (newTasq) => {
        const response = await fetch('/tasq', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTasq),
            //JSON.stringify will turn the newTasq, which is an array, into a JSON string.
        })
        const data = await response.json()
        setTasq([newTasq, ...tasq])
    }

    //delete tasq
    const deleteTasq = async (deleteTasq) => {
        if(window.confirm('Are you sure you want to delete this tasq?')){
            await fetch (`/tasq/${id}`, {method: 'DELETE'})
            setTasq(tasq.filter((item) => item.id !== id))
        }
    }

    //update tasq item
    const updateTasq = async (id, updItem) => {
        const response = await fetch(`/tasq/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updItem)
        })
        const data = await response.json()
        setTasq(tasq.map((item)=> item.id === id ? {...item, ...data} : item))
    }
    
    //set item to be updated
    const editTasq = (item) => {
        setTasqEdit({
            item,
            edit: true
        })
    }

}