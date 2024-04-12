import React from 'react'
import { Drawer, DrawerContent, DrawerTrigger } from '../ui/drawer'
import { Button } from '../ui/button'
import DrawerAddExisting from './DrawerAddExisting'
import DrawerAddMagnum from './DrawerAddMagnum'
import DrawerAddNew from './DrawerAddNew'

export default function DrawerItems() {
  return (
    <Drawer>
        <DrawerTrigger asChild>
            <Button className="mt-[16px] bg-[#FF7435] rounded-sm w-[50%]">Добавить новый товар</Button>
        </DrawerTrigger>
        <DrawerContent className="h-[70vh]">
            <div className="flex flex-col md:flex-row w-full items-center justify-center gap-[16px] h-full p-24">
                <DrawerAddExisting/>
                <DrawerAddMagnum/>
                <DrawerAddNew/>
            </div>
        </DrawerContent>
    </Drawer>
  )
}
