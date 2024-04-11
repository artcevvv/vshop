import React from "react";
import { Button } from "../ui/button";
import { useAuth } from "@/context/AuthentificationContext";

export default function Card({name,uid,owner}) {
  const { user, accessToken, error, login, register, logout } = useAuth();
  return (
    <Button className="md:w-[500px] h-full border-[1px] border-solid border-[#DADADA] rounded-[64px] bg-transparent hover:bg-[#E6E6E6] p-0 w-max">
      <div className="flex flex-col items-center gap-[50px] pt-6">
        <div className="flex flex-col items-center">
          <span className="text-black text-[40px] leading-[42px] font-bold">
            “{name}”
          </span>
          <span className="text-black text-[16px] font-medium">
            4 участника
          </span>
        </div>
        <svg
          width="265"
          height="207"
          viewBox="0 0 265 207"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="17.3115" width="247.688" height="9.32161" fill="#D9D9D9" />
          <rect width="9.32161" height="9.32161" fill="#D9D9D9" />
          <rect y="49.2715" width="9.32161" height="9.32161" fill="#D9D9D9" />
          <rect y="98.5425" width="9.32161" height="9.32161" fill="#D9D9D9" />
          <rect y="147.814" width="9.32161" height="9.32161" fill="#D9D9D9" />
          <rect y="197.085" width="9.32161" height="9.32161" fill="#D9D9D9" />
          <rect
            x="17.3115"
            y="49.2715"
            width="135.829"
            height="9.32161"
            fill="#D9D9D9"
          />
          <rect
            x="161.131"
            y="49.2715"
            width="103.869"
            height="9.32161"
            fill="#D9D9D9"
          />
          <rect
            x="17.3115"
            y="98.5425"
            width="83.8945"
            height="9.32161"
            fill="#D9D9D9"
          />
          <rect
            x="109.196"
            y="98.5425"
            width="155.804"
            height="9.32161"
            fill="#D9D9D9"
          />
          <rect
            x="17.3115"
            y="147.814"
            width="247.688"
            height="9.32161"
            fill="#D9D9D9"
          />
          <rect
            x="17.3115"
            y="197.085"
            width="214.397"
            height="9.32161"
            fill="#D9D9D9"
          />
          <rect
            x="238.367"
            y="197.085"
            width="26.6332"
            height="9.32161"
            fill="#D9D9D9"
          />
        </svg>
        <div className="flex flex-col items-center justify-center w-[500px] bg-[#9c9c9c5e] h-[150px] rounded-b-[64px]">
          <span className="text-[14px] text-[#161F1E]">by l0ca1</span>
          <span className="text-[14px] text-[#161F1E]">27.01.2005 15:23</span>
        </div>
      </div>
    </Button>
  );
}
