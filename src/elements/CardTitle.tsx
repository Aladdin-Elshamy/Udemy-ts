import React from 'react'
import { textSlice } from '../utilities'

export default function CardTitle({ title , className=''}:{title: string, className?: string}) {
  return (
    <h3 className={`font-bold ${className}`}>{textSlice(title,50)}</h3>

  )
}
