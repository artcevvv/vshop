import AuthenticationContext from '@/context/AuthentificationContext'
import { useRouter } from 'next/router'
import React, { useContext, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password1, setPassword] = useState('')
  
  const router = useRouter()

  const {login} = useContext(AuthenticationContext)

  const submitHandler = e => {
  	e.preventDefault();
  	login({username, password1})
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
      					<div>
      						<Input type='text' onChange={e => setUsername(e.target.value)} value={username} />
      					</div>

      					<div>
      						<Input type='Password' onChange={e => setPassword(e.target.value)} value={password1} />
      					</div>

      					<div>
      						<Button color='primary' type='submit'>Login</Button>
      					</div>

      					<div>
      						<Link href='/account/register'>
      							Dont have an account? Sign Up
      						</Link>
      					</div>
      				</form>
    </div>
  )
}
