import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from '../services/api'

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  const [currentRoute, setCurrentRoute] = useState(null)
  
  
  
  const navigate = useNavigate()
  
  useEffect(() =>{
    const loadUser = async () => {
      
      const token = localStorage.getItem('@Kenzie_Hub_token')
      if(token){
        try {
          api.defaults.headers.authorization = `Bearer ${token}`

          const { data } = await api.get('/profile')
          setUser(data)
          navigate(currentRoute)
        } catch (error) {
          console.log(error)
          // localStorage.removeItem('@Kenzie_Hub_token')
        } 
      }
      setLoading(false)
    }
    loadUser()
  }, [])
          
  const userLogout = () => {
    setUser(null)
    navigate('/')
    localStorage.removeItem('@Kenzie_Hub_token')
  }

  const userLogin = async (data) => {
    setLoading(true)
      try {
        const response = await api.post('/sessions', data);
        toast.success('login feito com sucesso!', {
          theme: 'dark',
          autoClose: 1500
        })
        localStorage.setItem('@Kenzie_Hub_token', response.data.token)
        setUser(response.data.user)
  
        navigate('/dashboard', {
          replace: true
        })
        setLoading(false)
        return response
      } 
      catch (error) {
        console.log(error.response.data.message)
        toast.error('Email ou senha incorretos', {
          theme: 'dark',
          autoClose: 1500
        })
      }
      finally{
        setLoading(false)
      }
    };

    const userRegister = async (data, setLoading) => {
    try{
      setLoading(true)
      const response = await api.post('/users', data);    
      toast.success('Conta criada com sucesso!', {
        theme: 'dark',
        autoClose: 1500
      });
      console.log(response.data)
      navigate('/')
      return response.data
    }
    catch (err) {
      toast.error('Email já cadastrado', {
        theme: 'dark',
        autoClose: 1500
      })
      console.log(err.response.data.message)
      
    }
    finally{
      setLoading(false)
    }
    }

    return(
        <UserContext.Provider value={{ loading, userLogin, userRegister, userLogout, user, setUser, currentRoute, setCurrentRoute } }>
            {children}
        </UserContext.Provider>
    )
}