import Card from '@/components/list/Card'
import React from 'react'

export default function List() {
  return (
    <div className='flex gap-[30px] max-w-[1420px] md:overflow-x-scroll flex-col md:flex-row'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}
