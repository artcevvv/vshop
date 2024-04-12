import { Button } from "@/components/ui/button";
import React, { FormEvent, useState } from "react";
import { ChevronLeft, SquarePlus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Card from '@/components/list/Card'
import axios from "axios";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { randomUUID } from "crypto";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthentificationContext";
import { useEffect } from "react";
export default function FamilyCreation() {


  const { user } = useAuth()
  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(null)
  const createList = async (listData: any) => {

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/models/productlists/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: listData.name,
          uid: listData.uid,
          owner: user.pk,
        }),
      });

      const data = await response.json();
      router.push('/lists/')
      if (!response.ok) {
        setError('Ошибка!')
      }
      return data;
    } catch (error: any) {
      console.error(error.message);
      router.push('/lists/')
    }
  };
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const listName = formData.get('name')
    const listUid = formData.get('uid')

    await createList({ name: listName, uid: listUid })
    // const data = await response.json()
  }


  const [lists, setLists] = useState([]);
  const { accessToken } = useAuth();

  useEffect(() => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/models/user-product-lists/`;
    if (accessToken) {
      axios.get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
        .then(response => {
          if (!response.ok) {
            setLists(response.data);
          }
        })
        .catch(error => {
          console.error('There was a problem with your fetch operation:', error);
        });
    }
  }, [accessToken]);

  console.log(lists);
  if (lists) {
    return (
      <div className='flex gap-[30px] max-w-[1420px] md:overflow-x-scroll flex-col md:flex-row'>
        {lists?.map((plist) => (
          <Card key={plist.id} name={plist.name} owner={plist.owner} uid={plist.uid}/>
        ))}
      </div>
    )
  } else {
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      {/* <div className="flex flex-col border-solid border-[#DADADA] border-[1px] rounded-[64px] bg-transparent justify-center items-center w-[100%] max-[764px]:h-[50vh]"> */}
      <DrawerTrigger asChild >
        <Button onClick={() => setIsOpen(true)} className="h-full self-center border-solid border-[#DADADA] border-[1px] rounded-[64px] bg-transparent flex justify-center items-center w-[100%] py-48 hover:bg-transparent hover:shadow-lg">
          <SquarePlus className="stroke-black stroke-1 h-16 w-16" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-[50vh] px-12">
        <div className="flex flex-row items-center gap-[16px] h-full justify-center max-[764px]:flex-col max-[764px]:w-full">

          <form onSubmit={onSubmit}>

            <div className="flex gap-[16px] flex-col max-[764px]:w-full max-[764px]:gap-[8px]">
              <Label htmlFor="familyName" className="text-[14px] font-medium">
                Название вашего списка
              </Label>

              <Input
                id="name"
                name="name"
                placeholder="Название списка"
                type="text"
                className="text-[16px] font-regular leading-6"
              ></Input>
              <Label htmlFor="listLink" className="text-[14px] font-medium">
                Ссылка
              </Label>
              <Input
                id="uid"
                name="uid"
                placeholder="Ссылка"
                type="text"
                className="text-[16px] font-regular leading-6"
              ></Input>
            </div>
            <Button onClick={() => setIsOpen(false)} type="submit" className="px-2 py-2 bg-[#FF783C] text-[14px] font-medium leading-[24px] max-[764px]:w-full">
              Продолжить
            </Button>
          </form>
        </div>


      </DrawerContent>
    </Drawer>
  }
}
