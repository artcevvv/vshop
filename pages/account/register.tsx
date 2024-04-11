import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AuthenticationContext from "@/context/AuthentificationContext";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import logo from "@/public/logo.svg";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import axios from "axios";
import Cookies from 'js-cookie';


export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const router = useRouter();

  const { register } = useContext(AuthenticationContext);

  const submitHandler = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (password1 !== password2) {
      console.error("passwords do not match");
      return;
    }

      try {
        await register({ username, email, password1, password2 });
        // const accessToken = res.data.access;

        // // Save accessToken to cookies
        // Cookies.set('accessToken', accessToken);

        // // Fetch user details
        // const userDetailsResponse = await axios.get("http://crvik.c-m.tech:4444/api/auth/user/", {
        //   headers: {
        //     Authorization: `Bearer ${Cookies.get("accessToken")}`
        //   }
        // });

        // console.log(userDetailsResponse.data);
        
        // Redirect or perform any other action after successful login
        router.push('/account/login'); // Example redirect to dashboard
      } catch (error:any) {
        console.log(error.message);
      }
    }
    
    return (
    <div className="flex flex-col justify-center items-center p-[25px] border-solid border rounded-[64px] border-[#DADADA] gap-[30px] w-[65%] max-[764px]:w-full">
      <Image src={logo} width="50" height="50" alt="logo"></Image>
      <span className="text-[24px] font-semibold">Зарегистрироваться</span>
      <form onSubmit={submitHandler} className="w-[100%] flex flex-col gap-[16px]">
        <div className="flex flex-col gap-[16px]">
          <div className="flex flex-col gap-[8px]">
            <Label htmlFor="username" className="text-[16px] font-medium">
              Имя пользователя
            </Label>
            <Input
              id="username"
              placeholder="Имя пользователя"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>

          <div className="flex flex-col gap-[8px]">
            <Label htmlFor="email" className="text-[16px] font-medium">
              Email
            </Label>
            <Input
              id="email"
              type="Email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="flex flex-col gap-[8px]">
            <Label htmlFor="password" className="text-[16px] font-medium">
              Пароль
            </Label>
            <Input
              id="password"
              placeholder="Введите пароль"
              type="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password1}
            />
          </div>
          <div className="flex flex-col gap-[8px]">
            <Label htmlFor="pass-check" className="text-[16px] font-medium">
              Проверка пароля
            </Label>
            <Input
              id="pass-check"
              placeholder="Введите пароль повторно"
              type="password"
              onChange={(e) => setPassword2(e.target.value)}
              value={password2}
            />
          </div>
        </div>
      <Button type="submit" className="px-[16px] py-[8px] text-[16px] bg-[#FF7435] leading-[24px] font-medium">Зарегистрироваться</Button>
      </form>
      <span className="text-[14px] text-[#00000048] max-[764px]:text-[16px]">Уже использовали VSHOP? <Link href="/account/login" className="text-[#558FFF]">Войти</Link></span>
    </div>
  );};