import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { ChevronLeft, SquarePlus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function FamilyCreation() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="flex flex-col border-solid border-[#DADADA] border-[1px] rounded-[64px] bg-transparent justify-center items-center w-[100%] max-[764px]:h-[50vh]">
      {!isVisible ? (
        <Button
          onClick={toggleVisibility}
          className="border-solid border-[#DADADA] border-[1px] rounded-[64px] bg-transparent flex justify-center items-center w-[100%] py-48 hover:bg-transparent hover:shadow-lg max-[764px]:border-0"
        >
          <SquarePlus className="stroke-black stroke-1 h-16 w-16" />
        </Button>
      ) : (
        <div className="flex flex-row items-end gap-[16px]">
          {/* <Button className="bg-transparent hover:bg-transparent">
            <ChevronLeft className="stroke-black stroke-1 h-16 w-16" />
          </Button> */}
          <div className="flex flex-col">
            <Label htmlFor="familyName" className="text-[14px] font-medium">
              Название вашей семьи
            </Label>
            <Input
              id="familyName"
              placeholder="Название семьи"
              type="text"
              className="text-[16px] font-regular leading-6"
            ></Input>
          </div>
          <Button className="px-2 py-2 bg-[#FF783C] text-[14px] font-medium leading-[24px]">Продолжить</Button>
        </div>
      )}
    </div>
  );
}
