import DrawerItems from '@/components/drawerItems/DrawerItems'
import Card from '@/components/list/Card'
import TodoList from '@/components/todolist/Todo'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import React from 'react'

export default function List() {
  const products=[{ name: 'Молоко' },
  { name: 'Хлеб'},
  { name: 'Яйца'},
  { name: 'Масло'},
  { name: 'Сахар'},
  { name: 'Сахар', quantity: 12},]
  return (
    <div className='flex h-[600px] border-[1px] border-solid border-[#DADADA5e] w-full rounded-[32px] md:rounded-[64px] flex-col md:flex-row'>
      <div className='flex flex-col h-full bg-[#D9D9D93E] w-full md:w-[25%] items-center rounded-t-[32px] md:rounded-l-[64px] p-[16px]'>
        <span className='text-black text-[25px] font-medium'>Пользователи</span>

      </div>
      <div className='flex w-full flex-col items-center p-[16px] gap-2'>
        <div className="flex flex-col items-center">
          <span className='text-black text-[32px] font-bold'>list name</span>
          <span className='text-black text-[16px] font-medium'>4 users</span>
        </div>
          <div className=' md:h-full h-[390px] border-[1px] border-solid border-[#DADADA5e] w-full rounded-[32px]' style={{scrollbarWidth: "none"}}>
            <div className="w-full h-full flex justify-between p-8 flex-col items-center">
                <TodoList products={products}/>
                <DrawerItems/>
            </div>

          </div>
      </div>
    </div>
  )
}
