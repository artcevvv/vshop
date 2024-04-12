import DrawerItems from '@/components/drawerItems/DrawerItems'
import Card from '@/components/list/Card'
import TodoList from '@/components/todolist/Todo'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useAuth } from '@/context/AuthentificationContext'
export default function List() {
  const router = useRouter();
  const { uid } = router.query;
  const { user, accessToken } = useAuth();
  const [listData, setListData] = useState(null);
  const [listProducts, setListProducts] = useState([])
  const [members, setMembers] = useState([]);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  // Функция для получения данных списка
  const getListData = async () => {
    try {
      const response = await fetch(`${API_URL}api/models/lists/${uid}`);
      const data = await response.json();
      console.log(data)
      setListData(data);
      // Получаем все продукты в списке
      const productsResponse = await fetch(`${API_URL}api/models/lists/${uid}/products`);
      const productsData = await productsResponse.json();
      console.log(productsData);
      setListProducts(productsData);
    } catch (error) {
      console.error('Error fetching list data:', error);
    }
  };

  // Функция для получения списка пользователей
  const getMemberListData = async () => {
    try {
      const response = await fetch(`${API_URL}api/models/lists/${uid}/members`);
      const data = await response.json();
      setMembers(data);
    } catch (error) {
      console.error('Error fetching member list data:', error);
    }
  };

  // Вызов функций для получения данных списка и продуктов при монтировании компонента
  useEffect(() => {
    if (uid) {
      getListData();
    }
  }, [uid]);

  // Функция для отправки данных формы
  // Функция для отправки данных формы

  // const products=[{ name: 'Молоко' },
  // { name: 'Хлеб'},
  // { name: 'Яйца'},
  // { name: 'Масло'},
  // { name: 'Сахар'},
  // { name: 'Сахар', quantity: 12},]
  return (
    <div className='flex h-[600px] border-[1px] border-solid border-[#DADADA5e] w-full rounded-[32px] md:rounded-[64px] flex-col md:flex-row'>
      <div className='flex flex-col h-full bg-[#D9D9D93E] w-full md:w-[25%] items-center rounded-t-[32px] md:rounded-l-[64px] p-[16px]'>
        <span className='text-black text-[25px] font-medium'>Пользователи</span>

      </div>
      <div className='flex w-full flex-col items-center p-[16px] gap-2'>
        <div className="flex flex-col items-center">
          <span className='text-black text-[32px] font-bold'>{listData? listData.name : 'loading'}</span> 
          <span className='text-black text-[16px] font-medium'>4 users</span>
        </div>
          <div className=' md:h-full h-[390px] border-[1px] border-solid border-[#DADADA5e] w-full rounded-[32px]' style={{scrollbarWidth: "none"}}>
            <div className="w-full h-full flex justify-between p-8 flex-col items-center">
                <TodoList products={listProducts}/>
                <DrawerItems/>
            </div>

          </div>
      </div>
    </div>
  )
}
