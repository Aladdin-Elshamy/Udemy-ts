import React from 'react'

export default function Author({name} : {name: string}) {
  return (
    <span className="text-sm text-gray-500">{name}</span>
)
}
