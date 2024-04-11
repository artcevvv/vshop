import React from 'react'
import { useApi } from '@/context/ApiContext'
import { useAuth } from '@/context/AuthentificationContext'
export default function index() {
    const{ createFamily } = useApi()
    const {user} = useAuth()
  return (
    <p>FAMILY</p>
  )
}
