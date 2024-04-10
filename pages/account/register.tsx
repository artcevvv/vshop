import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import AuthenticationContext from '@/context/AuthentificationContext'
import { useRouter } from 'next/router'
import React, { useContext, useState } from 'react'

export default function RegisterPage() {
    const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password1, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const router = useRouter()

  const {register} = useContext(AuthenticationContext)

  const submitHandler = e => {
  	e.preventDefault();
    if (password1 !== password2) {
      console.error('passwords do not match')
    }
    // console.log({username, email, password, password2})
  	register({username, email, password1, password2})
  }

  return (
    <div>
        <form onSubmit={submitHandler}>
      					<div>
      						<Input type='text' onChange={e => setUsername(e.target.value)} value={username} />
      					</div>

                <div>
                  <Input type='Email' onChange={e => setEmail(e.target.value)} value={email} />
                </div>

      					<div>
      						<Input type='Password' onChange={e => setPassword(e.target.value)} value={password1} />
      					</div>

                <div>
                  <Input type="password" onChange={e => setPassword2(e.target.value)} value={password2} />
                </div>

      					<div>
      						<Button type='submit'>Login</Button>
      					</div>

        </form>
    </div>
  )
}
