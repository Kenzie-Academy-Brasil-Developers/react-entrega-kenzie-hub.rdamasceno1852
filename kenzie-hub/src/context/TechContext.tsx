import { AxiosError } from "axios";
import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";
import FormModal from "../components/FormModal";
import api from "../services/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext({} as iTechContext)

interface iApiError{
    error: string
}

interface iTechContext{
    openFormModal: boolean
    setOpenFormModal: React.Dispatch<React.SetStateAction<boolean>>
    openModal: () => void
    closeModal: () => void
    registerTech: (data: iUserTechs) => Promise<void>
    deleteTech: (id: string) => Promise<void>
    
}

interface iTechProviderProps {
    children: ReactNode
}

export interface iUserTechs{
    id: string
    title:string 
    status:string
    created_at:string
    updated_at:string
}

export const TechProvider = ({ children }: iTechProviderProps) => {

    const [openFormModal, setOpenFormModal] = useState(false)
 
    const {userTechs, setUserTechs} = useContext(UserContext)
    
    const openModal = () :void=> (
        setOpenFormModal(true)
    ) 

    const closeModal = ():void => (
        setOpenFormModal(false)
    )

    const loadUser = async () => {
        
            const token = localStorage.getItem('@Kenzie_Hub_token')
            if(token){
            try {
                api.defaults.headers.authorization = `Bearer ${token}`
    
                const { data } = await api.get('/profile')
                console.log(data);
                setUserTechs(data.techs)
                
        
            } catch (error) {
                console.log(error)
            } 
            }
    }

    const registerTech = async (data: iUserTechs) => {
        
        try {
            if(!userTechs.find(tech => (
                tech.title.toLowerCase() === data.title.toLowerCase()
            ))){
                await api.post('/users/techs', data)
                toast.success(
                    'Tecnologia criada com sucesso!',{
                    theme: 'dark',
                    autoClose: 1500
                })
                loadUser()   
                setOpenFormModal(false)}
                else{
                   toast.warn('tecnologia já cadastrada',{
                    theme: 'dark',
                    autoClose: 2000
                   })
                }
        } catch (error) {
        const resquestError = error as AxiosError<iApiError>
        toast.error(resquestError.response?.data.error, {
            theme:'dark',
            autoClose: 1500
        })
        }
    }
    

    const deleteTech = async (id: string) => {

        try {
            await api.delete(`/users/techs/${id}`)
            const removeTech = userTechs.filter(el => el.id !== id)
            console.log(removeTech)
            toast.success('Tecnologia excluida', {
                theme: 'dark',
                autoClose: 1500
            })
            setUserTechs(removeTech)
        } catch (error) {
            console.error(error)
        }
    }



    return(
        <TechContext.Provider value= {{
            openFormModal, 
            setOpenFormModal, 
            openModal, 
            closeModal, 
            registerTech, 
            deleteTech }}
            >
            {children}
            {openFormModal && <FormModal />}
        </TechContext.Provider>

    )    
}
