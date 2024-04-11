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
    const createFamily = async (familyData:any) => {
        try {
          const response = await fetch('http://crvik.c-m.tech:4444/api/models/families/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: familyData.name,
              owner: familyData.user.pk,
              uid: randomUUID
            }),
          });
          
          const data = await response.json();
          if (!response.ok) {
            setError(data['owner'])
          }
          router.push('/test/family/')
          return data;
        } catch (error) {
            console.error(error.message);
            router.push('/test/family/')
        }
      };
  return (
    <div className="">

    <button onClick={()=>createFamily({name: 'TestFamq', user: user})}>Create</button>
    <p className='text-red-500'>{error}</p>
    </div>
  )
}
