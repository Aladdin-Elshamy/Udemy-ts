import React from 'react'

export default function Price({amount , className=''}:{amount : number , className ?: string}) {
  return (
    <span className={`text-lg font-bold  ${className}`}>{amount}</span>
)
}
