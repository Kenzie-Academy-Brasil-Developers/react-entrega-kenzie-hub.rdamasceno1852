import { createContext, ReactNode, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { iLoginForm } from '../pages/Login'
import { iRegisterForm } from '../pages/Register'
import api from '../services/api'
import { iUserTechs } from './TechContext'

export const UserContext = createContext({} as iUserContext)

interface iUserContext{
  userLogin: (data: iLoginForm) => void
  userLogout: () => void
  loading: boolean 
  userRegister: (data: iRegisterForm , setLoading: React.Dispatch<React.SetStateAction<boolean>>) => void 
  user: iUser | null
  setUser: React.Dispatch<React.SetStateAction<iUser | null>>
  currentRoute: string | null
  setCurrentRoute: React.Dispatch<React.SetStateAction<string | null>>
  userTechs: iUserTechs[]
  setUserTechs: React.Dispatch<React.SetStateAction<iUserTechs[]>>
}

export interface iUser{
  id: string;
  name: string
  email: string
  course_module: string 
  bio: string
  contact:string
  created_at: string
  updated_at: string
  techs: iUserTechs[]
}

interface iUserProviderProps{
  children: ReactNode
}

export const UserProvider = ({ children }:iUserProviderProps) => {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<iUser | null>(null)
  const [currentRoute, setCurrentRoute] = useState<string | null>(null)
  const [userTechs, setUserTechs] = useState<iUserTechs[]>([] as iUserTechs[])
  
  const navigate = useNavigate()
  
  useEffect(() =>{
    const loadUser = async () => {
      
      const token = localStorage.getItem('@Kenzie_Hub_token')
      
      if(token){
        console.log(token);
        try {
          api.defaults.headers.authorization = `Bearer ${token}`

          const { data } = await api.get('/profile')
          setUser(data)
          setUserTechs(data.techs)
          if(currentRoute){
            navigate(currentRoute)
          }
        } catch (error) {
          console.log(error)
          localStorage.removeItem('@Kenzie_Hub_token')
        } 
      }
      setLoading(false)
    }
    loadUser()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])
          
  const userLogout = ():void => {
    setUser(null)
    navigate('/')
    localStorage.removeItem('@Kenzie_Hub_token')
  }

  const userLogin = async (data: iLoginForm) => {
    setLoading(true)
      try {
        const response = await api.post('/sessions', data);
        toast.success('login feito com sucesso!', {
          theme: 'dark',
          autoClose: 1500
        })
        localStorage.setItem('@Kenzie_Hub_token', response.data.token)
        setUser(response.data.user)
        setUserTechs(response.data.user.techs)

  
        navigate('/dashboard', {
          replace: true
        })
        setLoading(false)
      } 
      catch (error) {
        toast.error('Email ou senha incorretos', {
          theme: 'dark',
          autoClose: 1500
        })
      }
      finally{
        setLoading(false)
      }
    };

    const userRegister = async (data: iRegisterForm , setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
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
      
    }
    finally{
      setLoading(false)
    }
    }

    return(
        <UserContext.Provider value={{ 
            loading, 
            userLogin, 
            userRegister, 
            userLogout, 
            user, 
            setUser, 
            currentRoute, 
            setCurrentRoute, 
            userTechs, 
            setUserTechs 
            }}
            >
            {children}
        </UserContext.Provider>
    )
}
