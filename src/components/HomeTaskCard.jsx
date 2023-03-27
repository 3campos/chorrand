import React from 'react'
import TaskContext from '../context/TaskContext'

export default function HomeTaskCard({item}) {
  return (
    <div>
    <div>HomeTaskCard</div>
    <div>{item.id}</div>
    <div>{item.title}</div>
    </div>
  )
}