import React from 'react'


export default function Button({ count, onClick }) {
    
  return (
    <button className='px-5 py-2 border-red-100 border-2 rounded-full' onClick={onClick}>Clicked {count} times</button>

  )
}
