import React from 'react'
import { Drawer, DrawerContent, DrawerTrigger } from '../ui/drawer'
import { Button } from '../ui/button'

export default function DrawerAddMagnum() {
  return (
    <Drawer>
    <DrawerTrigger asChild>
        <Button className="mt-[16px] bg-[#FF7435] rounded-sm w-full md:w-[50%]">Добавить товар magnum</Button>
    </DrawerTrigger>
    <DrawerContent className="h-[70vh]">
        <div className="flex w-full items-center justify-center gap-[16px] h-full">
            <div>
                
            </div>
        </div>
    </DrawerContent>
</Drawer>
  )
}
