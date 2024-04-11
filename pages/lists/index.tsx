import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { ChevronLeft, SquarePlus } from "lucide-react";
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
import { randomUUID } from "crypto";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthentificationContext";
import DrawerShad from "@/components/drawer/Drawer";

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

export default function FamilyCreation() {
  const [goal, setGoal] = React.useState(350);
  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }
  // const {user} = useAuth()
  //   const router = useRouter()
  //   console.log(user);
  //   const [error, setError] = useState(null)
  //   const createFamily = async (familyData:any) => {
  //       try {
  //         const response = await fetch('http://crvik.c-m.tech:4444/api/models/families/', {
  //           method: 'POST',
  //           headers: {
  //             'Content-Type': 'application/json',
  //           },
  //           body: JSON.stringify({
  //             name: familyData.name,
  //             owner: familyData.user.pk,
  //             uid: randomUUID
  //           }),
  //         });

  //         const data = await response.json();
  //         if (!response.ok) {
  //           setError(data['owner'])
  //         }
  //         router.push('/lists/list/')
  //         return data;
  //       } catch (error:any) {
  //           console.error(error.message);
  //           router.push('/lists/list/')
  //       }
  //     };
  return (
    <Drawer>
      {/* <div className="flex flex-col border-solid border-[#DADADA] border-[1px] rounded-[64px] bg-transparent justify-center items-center w-[100%] max-[764px]:h-[50vh]"> */}
      <DrawerTrigger asChild>
        <Button className="h-full self-center border-solid border-[#DADADA] border-[1px] rounded-[64px] bg-transparent flex justify-center items-center w-[100%] py-48 hover:bg-transparent hover:shadow-lg">
          <SquarePlus className="stroke-black stroke-1 h-16 w-16" />
        </Button>
      </DrawerTrigger>
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
  );
}
