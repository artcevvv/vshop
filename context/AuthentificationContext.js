import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export const useAuth = () => useContext(AuthenticationContext)
const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  useEffect(() => {
    const user = localStorage.getItem('user')
    const accessToken = localStorage.getItem('accessToken')?.replace(/"/g, "").replace(/(\r\n|\n|\r)/gm, "");
    if (user & accessToken) {
      setUser(JSON.parse(user))
    setAccessToken(accessToken)
    console.log(accessToken)
  3}
  }, [])
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [error, setError] = useState(null);

  const router = useRouter();
  const login = async ({ username, password1 }) => {
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    const body = {
      username: username,
      email: "",
      password: password1,
    };

    try {
      const { data: accessResponse } = await axios.post(
        `http://127.0.0.1:8000/api/auth/login/`,
        body,
        config
      );

      if (accessResponse && accessResponse.user) {
        setUser(accessResponse.user);
      }

      if (accessResponse && accessResponse.access) {
        setAccessToken(accessResponse.access);
      }
      localStorage.setItem('user', JSON.stringify(accessResponse.user))
      localStorage.setItem('accessToken', JSON.stringify(accessResponse.access))
      router.push("/");
    } catch (error) {
      if (error.response) {
        console.error(error);
        return;
      } else if (error.request) {
        console.error(error.request);
        return;
      } else {
        console.error(error);
        return;
      }
      console.error(error);
      return;
    }
  };

  const register = ({ username, email, password1, password2 }) => {
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    const body = {
      username,
      email,
      password1,
      password2,
    };

    try {
      axios.post(
        `http://127.0.0.1:8000/api/auth/register/`,
        body,
        config
      );
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message);
        return;
      } else if (error.request) {

        setError("Something went wrong");
        return;
      } else {
        setError("Something went wrong");
        return;
      }
      console.error("Error", error.message);
      setError("Something went wrong");
      return;
    }
  };

  const logout = () => {
    localStorage.setItem('user', '')
    localStorage.setItem('accessToken', '');
  };

  return (
    <AuthenticationContext.Provider
      value={{ user, accessToken, error, login, register, logout }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContext;
