import React from 'react'
import TaskContext from '../context/TaskContext'
import HomeTaskCard from './HomeTaskCard'

export default function Home({children}) {
    const {task, setTask} = useContext(FeedbackContext)

    return (
        <div>
        <div>Home Page</div>
        <div>This is a montserrat font.</div>
        <div>My dog and I played fetch at the park today. </div>
        <div>
            {task.map((item)=>(
                <HomeTaskCard
                key={item.id}
                item={item}
                />
            ))}
        </div>
        </div>
    )
}