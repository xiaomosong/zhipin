'use client'
import { useParams } from 'next/navigation'
import React from 'react'

export default function Auth() {
  const params = useParams()
  console.log('params :>> ', params);
  return (
    <div>Auth</div>
  )
}
