import AuthenticationContext from '@/context/AuthentificationContext'
import { useRouter } from 'next/router'
import React, { useContext, useState } from 'react'
// import axios from 'axios'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import logo from '@/public/logo.svg'
import Image from 'next/image'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password1, setPassword] = useState('')
  
  const router = useRouter()

  const {login, error} = useContext(AuthenticationContext)

  const submitHandler = (e: { preventDefault: () => void }) => {
  	e.preventDefault();
  	login({username, password1})
  }

  

  return (
	<div className="flex flex-col justify-center items-center p-[25px] border-solid border rounded-[64px] border-[#DADADA] gap-[30px] w-[65%] max-[764px]:w-full">
      <Image src={logo} width="50" height="50" alt="logo"></Image>
      <span className="text-[24px] font-semibold">Войти</span>
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
            <Label htmlFor="password" className="text-[16px] font-medium">
              Пароль
            </Label>
            <Input
              id="password"
              placeholder="Введите пароль"
              type="Password"
              onChange={e => setPassword(e.target.value)} value={password1}
            />
          </div>
        </div>
      <Button type="submit" className="px-[16px] py-[8px] text-[16px] bg-[#FF7435] leading-[24px] font-medium">Войти</Button>
      <p className='text-red'>{error ? typeof error == 'object'? error.map((i:any)=> (<p>{i}</p>)) : error: ''}</p>
      </form>
      <span className="text-[14px] text-[#00000048] max-[764px]:text-[16px] max-[764px]:text-center">Впервые используете VSHOP? <Link href="/account/register" className="text-[#558FFF]">Зарегистрироваться</Link></span>
    </div>
  )
}
