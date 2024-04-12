import React from 'react'
import { Drawer, DrawerContent, DrawerTrigger } from '../ui/drawer'
import { Button } from '../ui/button'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useAuth } from "@/context/AuthentificationContext";

export default function DrawerAddNew() {
  const router = useRouter();
  const { uid } = router.query;
  const { user, accessToken } = useAuth();
  const [listData, setListData] = useState(null);
  const [listProducts, setListProducts] = useState([])
  const [members, setMembers] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [count, setCount] = useState('');
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const getListData = async () => {
    try {
      const response = await fetch(`${API_URL}api/models/lists/${uid}`);
      const data = await response.json();
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

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      // Создаем новый продукт
      const productResponse = await fetch(`${API_URL}api/models/products/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          name: name,
          price: price,
          origin: "custom"
        }),
      });
      if (!productResponse.ok) {
        throw new Error('Failed to create product');
      }
  
      const productData = await productResponse.json();
      const productId = productData.id;
  
      // Добавляем новый продукт в список
      const productItemResponse = await fetch(`${API_URL}api/models/lists/${uid}/add_product/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          product: productData,
          count: count,
          user_id: user.pk,
        }),
      });
  
      if (productItemResponse.ok) {
        // Обработка успешного добавления продукта
        // Например, перезагрузка данных или уведомление об успешном добавлении
        getListData(); // Обновляем данные списка после добавления продукта
      } else {
        // Обработка ошибки при добавлении продукта в список
        console.error('Error adding product to list:', productItemResponse.statusText);
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };
  return (
    <Drawer>
    <DrawerTrigger asChild>
        <Button className="mt-[16px] bg-[#FF7435] rounded-sm w-full md:w-[50%]">Добавить свой товар</Button>
    </DrawerTrigger>
    <DrawerContent className="h-[70vh]">
    <div className="flex flex-row items-center gap-[16px] h-full justify-center max-[764px]:flex-col max-[764px]:w-full">
            <form onSubmit={handleSubmit}>
    <div className="flex gap-[16px] flex-col max-[764px]:w-full max-[764px]:gap-[8px]">
            <label className="text-[14px] font-medium flex flex-col gap-[4px]">
              Название товара:
              <input className="border-[1px] border-solid border-[#E6E6E6] rounded-[4px] text-[16px] font-regular leading-6" type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label  className="text-[14px] font-medium flex flex-col gap-[4px]">
              Цена:
              <input className="border-[1px] border-solid border-[#E6E6E6] rounded-[4px] text-[16px] font-regular leading-6" type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
            </label >
            <label  className="text-[14px] font-medium flex flex-col gap-[4px]">
              Количество:
              <input className="border-[1px] border-solid border-[#E6E6E6] rounded-[4px] text-[16px] font-regular leading-6" type="number" value={count} onChange={(e) => setCount(e.target.value)} />
            </label>
            <button type="submit" className="rounded-[16px] text-white px-2 py-2 bg-[#FF783C] text-[14px] font-medium leading-[24px] max-[764px]:w-full">Add Product</button>
        </div>
          </form>
          </div>
    </DrawerContent>
</Drawer>
  )
}
