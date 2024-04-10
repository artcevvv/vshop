import { createContext, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

const AuthenticationContext = createContext()

export const AuthenticationProvider = ({ children }) => {
	const [user, setUser] = useState(null)
	const [accessToken, setAccessToken] = useState(null)
	const [error, setError] = useState(null)

	const router = useRouter()

	// Login User
	const login = async({username, password1}) => {
		const config = {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		}

		const body = {
			"username": username,
            'email': '',
			"password": password1,
		}

		try {
			const { data:accessResponse } = await axios.post('http://192.168.0.141:8000/api/auth/login/', body, config)
			
			if (accessResponse && accessResponse.user) {
				setUser(accessResponse.user)
			}

			if (accessResponse && accessResponse.access) {
				setAccessToken(accessResponse.access)
			}

			router.push('/')
		} catch(error) {
		  if (error.response & error.response.data) {
		  	setError(error.response.data.message)
		  	return      
	      } else if (error.request) {
		    setError('Something went wrong')
		    return  
	      } else {
			setError('Something went wrong')
			return
	      }
	      console.error('Error', error.message);
	      setError('Something went wrong')
	      return
		}
	}

	const register = async ({ username, email, password1, password2 }) => {
		const config = {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		}

		const body = {
			username,
			email,
			password1,
            password2
		}

		try {
			await axios.post('http://192.168.0.141:8000/api/auth/register/', body, config)
			// login({ username, password1 })
		} catch(error) {
		  if (error.response & error.response.data) {
		  	setError(error.response.data.message)
		  	return      
	      } else if (error.request) {
		    setError('Something went wrong')
		    return  
	      } else {
			setError('Something went wrong')
			return
	      }
	      console.error('Error', error.message);
	      setError('Something went wrong')
	      return
		}
	}

	const logout = async () => {
		try {
			// remove the http only cookie
			await axios.post('http://192.168.0.141:8000/api/logout')

			// remove the access token and the user from the state
			setUser(null)
			setAccessToken(null)
		} catch(error) {
		  if (error.response & error.response.data) {
		  	setError(error.response.data.message)
		  	return      
	      } else if (error.request) {
		    setError('Something went wrong')
		    return  
	      } else {
			setError('Something went wrong')
			return
	      }
	      console.error('Error', error.message);
	      setError('Something went wrong')
	      return
		}
	}

	return (
		<AuthenticationContext.Provider value={{ user, accessToken, error, login, register, logout }}>
			{children}
		</AuthenticationContext.Provider>
	)
}

export default AuthenticationContext