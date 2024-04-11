import React from 'react'
import { useAuth } from '@/context/AuthentificationContext';
import { randomUUID } from 'crypto';
import { useState } from 'react';
import { useRouter } from 'next/navigation'
export default function createFamilyPage() {
    const {user} = useAuth()
    const router = useRouter()
    console.log(user);
    const [error, setError] = useState(null)
    const createList = async (listData:any) => {
        try {
          const response = await fetch(`${process.env.API_URL}/api/models/productlists/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: listData.name,
              uid: listData.uid,
              owner: listData.user.pk,
            }),
          });
          
          const data = await response.json();
          if (!response.ok) {
            setError('Ошибка!')
          }
          router.push('/test/lists/')
          return data;
        } catch (error:any) {
            console.error(error.message);
            router.push('/test/lists/')
        }
      };
  return (
    <div className="">

    <button onClick={()=>createList({name: 'Семья', user: user, uid: '' })}>Create</button>
    <p className='text-red-500'>{error}</p>
    </div>
  )
}
