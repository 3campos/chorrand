import React from 'react'
import TaskContext from '../context/TaskContext'
import HomeTaskCard from './HomeTaskCard'
import { useContext } from 'react'

export default function Home({children}) {
    const {task, setTask} = useContext(TaskContext)
    // console.log(task.allTasks[0].title)
    return (
        <div>
        <div>Home Page</div>
        <div>This is a montserrat font.</div>
        <div>My dog and I played fetch at the park today. </div>
        <div>
            {task.allTasks[0].title}
            {/* {task.allTasks[0]} */}
            {/* {task.map((item)=>(
                <HomeTaskCard
                key={item.id}
                item={item}
                />
            ))} */}
        </div>
        </div>
    )
}