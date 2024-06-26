import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="py-4 w-full rounded-[30px] px-[20px] flex items-start justify-between bg-[#fafafa] border-2 border-[#dddddd] gap-20 ">
      <div className="flex flex-row w-[100%] justify-between items-start max-[764px]:flex-col max-[764px]:justify-center max-[764px]:gap-[10px] max-[764px]:items-center">

      <Link href={"/"} className="flex gap-[5px] items-center w-[100%]">
        <svg
          width="31"
          height="32"
          viewBox="0 0 31 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.125 21.1667V10.8333C27.1245 10.3803 27.0049 9.9354 26.7782 9.54318C26.5515 9.15097 26.2257 8.82528 25.8333 8.59877L16.7917 3.4321C16.399 3.20536 15.9535 3.086 15.5 3.086C15.0465 3.086 14.601 3.20536 14.2083 3.4321L5.16667 8.59877C4.77434 8.82528 4.44847 9.15097 4.22176 9.54318C3.99505 9.9354 3.87546 10.3803 3.875 10.8333V21.1667C3.87546 21.6197 3.99505 22.0646 4.22176 22.4568C4.44847 22.8491 4.77434 23.1748 5.16667 23.4013L14.2083 28.5679C14.601 28.7947 15.0465 28.914 15.5 28.914C15.9535 28.914 16.399 28.7947 16.7917 28.5679L25.8333 23.4013C26.2257 23.1748 26.5515 22.8491 26.7782 22.4568C27.0049 22.0646 27.1245 21.6197 27.125 21.1667Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.6875 5.93793L15.5 9.29626L21.3125 5.93793"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.6875 26.0621V19.3583L3.875 16"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M27.125 16L21.3125 19.3583V26.0621"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.22375 9.48999L15.5 16.0129L26.7763 9.48999"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.5 29.02V16"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h1 className="font-black text-[28px] ">VSHOP</h1>
      </Link>
      <div className="flex gap-[30px]">
        <div className="flex items-start flex-col gap-[10px] w-[100%]">
          <Link className="text-[#161F1E] text-[16px] font-medium" href={"/"}>
            О нас
          </Link>
          <Link className="text-[#161F1E] text-[16px] font-medium" href={"/"}>
            Контакты
          </Link>
          <Link className="text-[#161F1E] text-[16px] font-medium" href={"/"}>
            Презентация
          </Link>
          <Link className="text-[#161F1E] text-[16px] font-medium" href={"/"}>
            l0xa1
          </Link>
          <Link className="text-[#161F1E] text-[16px] font-medium" href={"/"}>
            artcevvv
          </Link>
        </div>
        <div className="flex items-start flex-col gap-[10px]">
          <Link className="text-[#161F1E] text-[16px] font-medium" href={"/"}>
            О нас
          </Link>
          <Link className="text-[#161F1E] text-[16px] font-medium" href={"/"}>
            Контакты
          </Link>
          <Link className="text-[#161F1E] text-[16px] font-medium" href={"/"}>
            Презентация
          </Link>
          <Link className="text-[#161F1E] text-[16px] font-medium" href={"/"}>
            l0xa1
          </Link>
          <Link className="text-[#161F1E] text-[16px] font-medium" href={"/"}>
            artcevvv
          </Link>
        </div>
        <div className="flex items-start flex-col gap-[10px]">
          <Link className="text-[#161F1E] text-[16px] font-medium" href={"/"}>
            О нас
          </Link>
          <Link className="text-[#161F1E] text-[16px] font-medium" href={"/"}>
            Контакты
          </Link>
          <Link className="text-[#161F1E] text-[16px] font-medium" href={"/"}>
            Презентация
          </Link>
          <Link className="text-[#161F1E] text-[16px] font-medium" href={"/"}>
            l0xa1
          </Link>
          <Link className="text-[#161F1E] text-[16px] font-medium" href={"/"}>
            artcevvv
          </Link>
        </div>
      </div>
        <div className="flex w-full items-center gap-[10px] justify-end max-[764px]:hidden">
          <Link
            className="text-[#161F1E] text-[16px] font-medium"
            href="/account/login"
          >
            Войти
          </Link>
          <Link
            className="text-white text-[16px] font-medium bg-[#ff7435] rounded-full px-[30px] py-4 "
            href={"/"}
          >
            Начать
          </Link>
        </div>
      </div>
    </div>
  );
}
