import React from 'react'
import FeedbackContext from '../context/FeedbackContext'

export default function HomeTaskCard({item}) {
  return (
    <div>
    <div>HomeTaskCard</div>
    <div>{item.id}</div>
    <div>{item.title}</div>
    </div>
  )
}