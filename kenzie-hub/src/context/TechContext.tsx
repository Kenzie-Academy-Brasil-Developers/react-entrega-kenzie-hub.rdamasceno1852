import { AxiosError } from "axios";
import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";
import FormModal from "../components/FormModal";
import api from "../services/api";
import { iTechs, UserContext } from "./UserContext";

export const TechContext = createContext({} as iTechContext)

interface iApiError{
    error: string
}

interface iTechContext{
    openFormModal: boolean
    setOpenFormModal: React.Dispatch<React.SetStateAction<boolean>>
    openModal: () => void
    closeModal: () => void
    registerTech: (data: iTechs) => Promise<void>
    deleteTech: (current: iTechs) => Promise<void>
    
}

interface iTechProviderProps {
    children: ReactNode
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
                // localStorage.removeItem('@Kenzie_Hub_token')
            } 
            }
    }

    const registerTech = async (data: iTechs) => {
        
        try {
            await api.post('/users/techs', data)
            toast.success(
                'Tecnologia criada com sucesso!',{
                theme: 'dark',
                autoClose: 1500
            })
            loadUser()   
             // console.log(response.data, userTechs);
            // setUserTechs([...userTechs, response.data])
            setOpenFormModal(false)
        } catch (error) {
        const resquestError = error as AxiosError<iApiError>
        toast.error(resquestError.response?.data.error, {
            theme:'dark',
            autoClose: 1500
        })
        }
    }
    

    const deleteTech = async (current: iTechs) => {

        try {
            console.log(current);
            await api.delete(`/users/techs/${current}`)
            const removeTech = userTechs.filter(el => el.id !== current)
            console.log(removeTech)
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
