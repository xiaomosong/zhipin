'use client'
import React from 'react'

export default function Error({error,reset}) {
  return (
    <div className="">
      <div className="text-red-400">An error occurred {error.message}</div>
      <button onClick={() => reset()}>try</button>
    </div>
  )
}
