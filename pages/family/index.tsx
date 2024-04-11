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
    <div className="flex flex-col w-[100%] border-solid border-[#DADADA] border-[1px] rounded-[64px] bg-transparent flex justify-center items-center w-[100%]">
      {!isVisible ? (
        <Button
          onClick={toggleVisibility}
          className="border-solid border-[#DADADA] border-[1px] rounded-[64px] bg-transparent flex justify-center items-center w-[100%] py-48 hover:bg-transparent hover:shadow-lg"
        >
          <SquarePlus className="stroke-black stroke-1 h-16 w-16" />
        </Button>
      ) : (
        <div>
          {/* <Button className="bg-transparent hover:bg-transparent">
            <ChevronLeft className="stroke-black stroke-1 h-16 w-16" />
          </Button> */}
          <Label></Label>
          <Input></Input>
        </div>
      )}
    </div>
  );
}
