import { AuthenticationProvider } from "@/context/AuthentificationContext";
import Link from "next/link";
import { useAuth } from "@/context/AuthentificationContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { List, LogOut, SquarePlus } from "lucide-react";
import { Input } from "../ui/input";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";
import { Label } from "../ui/label";
import { useRouter } from "next/router";
import { useState } from "react";
export default function Navbar() {
  const { user, accessToken, error, login, register, logout } = useAuth();
  const [count, setCount] = useState(0)
  const router = useRouter()
  const handleClick = () => {
    logout()
    router.push('/account/login')
    setCount(2)
  }
  return (
    <div className="h-[90px] w-full rounded-full px-[20px] flex items-center justify-between bg-[#fafafa] border-2 border-[#dddddd]">
      <Link href={"/"} className="flex gap-[5px] items-center">
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
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.6875 5.93793L15.5 9.29626L21.3125 5.93793"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.6875 26.0621V19.3583L3.875 16"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M27.125 16L21.3125 19.3583V26.0621"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.22375 9.48999L15.5 16.0129L26.7763 9.48999"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.5 29.02V16"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <h1 className="font-black text-[28px] ">VSHOP</h1>
      </Link>

      <div className="flex items-center gap-[10px] max-[764px]:hidden">
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
      {user ? (
        <div>
          <div className="flex items-center gap-[10px]">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="text-[#161F1E] text-[16px] font-medium bg-transparent hover:bg-transparent">
                  {user.username}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>{user.username}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Link
                      href="/lists"
                      className="text-black font-medium flex flex-row items-center gap-2 p-2"
                    >
                      <List className="stroke-black" /> Мои списки
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Drawer>
                      <DrawerTrigger asChild>
                        <Button className="bg-transparent text-black gap-2 p-2 hover:bg-transparent">
                          <SquarePlus className="stroke-black" />
                          Добавить список
                        </Button>
                      </DrawerTrigger>
                      <DrawerContent className="h-[50vh] px-12">
                        <div className="flex flex-row items-center gap-[16px] h-full justify-center max-[764px]:flex-col max-[764px]:w-full">
                          <div className="flex gap-[16px] flex-col max-[764px]:w-full max-[764px]:gap-[8px]">
                            <Label
                              htmlFor="familyName"
                              className="text-[14px] font-medium"
                            >
                              Название вашего списка
                            </Label>
                            <Input
                              id="familyName"
                              placeholder="Название списка"
                              type="text"
                              className="text-[16px] font-regular leading-6"
                            ></Input>
                            <Label
                              htmlFor="listLink"
                              className="text-[14px] font-medium"
                            >
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
                    </Drawer>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem className="">
                    <Button onClick={() => handleClick()} className="bg-red-500 w-full justify-start">
                      <LogOut className="stroke-white" />
                      <p
                        className="text-white font-medium flex flex-row items-center gap-2 w-100"
                      >
                        Выйти
                      </p>
                    </Button>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              className="text-white text-[16px] font-medium bg-[#ff7435] rounded-full px-[30px] py-4 "
              href="/lists/"
            >
              Начать
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-[10px]">
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
      )}
    </div>
  );
}
