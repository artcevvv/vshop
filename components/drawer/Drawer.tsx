import React from 'react'
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from '../ui/button';
import { SquarePlus } from 'lucide-react';

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
];

export default function DrawerShad() {
  return (
    <Drawer>
      {/* <div className="flex flex-col border-solid border-[#DADADA] border-[1px] rounded-[64px] bg-transparent justify-center items-center w-[100%] max-[764px]:h-[50vh]"> */}
        <DrawerContent className="h-[50vh] px-12">
          <div className="flex flex-row items-center gap-[16px] h-full justify-center max-[764px]:flex-col max-[764px]:w-full">
            <div className="flex gap-[16px] flex-col max-[764px]:w-full max-[764px]:gap-[8px]">
              <Label htmlFor="familyName" className="text-[14px] font-medium">
                Название вашего списка
              </Label>
              <Input
                id="familyName"
                placeholder="Название списка"
                type="text"
                className="text-[16px] font-regular leading-6"
              ></Input>
              <Label htmlFor="listLink" className="text-[14px] font-medium">
                Ссылка
              </Label>
              <Input
                id="listLink"
                placeholder="Ссылка"
                type="text"
                className="text-[16px] font-regular leading-6"
              ></Input>
            </div>
            <Button className="px-2 py-2 bg-[#FF783C] text-[14px] font-medium leading-[24px] max-[764px]:w-full">
              Продолжить
            </Button>
          </div>
        </DrawerContent>
      {/* </div> */}
    </Drawer>
  )
}
