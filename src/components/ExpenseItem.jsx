import React from 'react'

export const ExpenseItem = ({expense}) => {
  const{id, charge, amount} = expense
  return (
  <li>
    
    <div className='info'>
      <span className='expense'>{charge}</span>
      </div>
      </li>
  )
}
