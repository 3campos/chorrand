import {createContext, useState, useEffect } from 'react'
import { json } from 'react-router-dom'
// Context lets the parent component make some information available to any component in the tree below it—no matter how deep—without passing it explicitly through props.

const TaskContext=createContext()

export const TaskProvider = ({children}) => {
    const [task, setTask] = useState([])
    const [taskEdit, setTaskEdit] = useState ({
        //the below are 2 default pieces of global state
        item: {},
        edit: false
        //when edit is not clicked, it's false. When clicked, it's "true".
    })

    useEffect(()=>{
        fetchTask()
    }, [])

    //Fetch task
    const fetchTask = async () => {
        const response = await fetch(`http://localhost:3003/tasks`)
        const data = await response.json()
        console.log('24:', data)
        setTask(data)
    }

    //Add task
    const addTask = async (newTask) => {
        const response = await fetch('http://localhost:3003/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTask),
            //JSON.stringify will turn the newTask, which is an array, into a JSON string.
        })
        console.log('line 37, newTask pre response:', newTask)
        const data = await response.json()
        console.log('line 39, data after response.json:', data)
        setTask([newTask, ...task])
        console.log('line 41:,', task)
    }

    //delete task
    const deleteTask = async (id) => {
        if(window.confirm('Are you sure you want to delete this task?')){
            await fetch (`/task/${id}`, {method: 'DELETE'})
            setTask(task.filter((item) => item.id !== id))
        }
    }

    //update task item
    const updateTask = async (id, updItem) => {
        const response = await fetch(`/task/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updItem)
        })
        const data = await response.json()
        setTask(task.map((item)=> item.id === id ? {...item, ...data} : item))
    }
    
    //set item to be updated
    const editTask = (item) => {
        setTaskEdit({
            item,
            edit: true
        })
    }

    return <TaskContext.Provider
    value={{
        task,
        //passing state down into the components
        deleteTask,
        addTask,
        updateTask,
        editTask,
        taskEdit,
        //This is the actual piece of state that holds the item and the boolean.
    }}>
    {children}
    {/* these children props represents all of the components that need access to the context */}
    </TaskContext.Provider>
}

export default TaskContext