import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import FormModal from "../components/FormModal";
import api from "../services/api";
import { UserContext } from "./UserContext";


export const TechContext = createContext({})

export const TechProvider = ({ children }) => {

    const [openFormModal, setOpenFormModal] = useState(false)
 
    const {userTechs, setUserTechs} = useContext(UserContext)
    
    const openModal = () => (
        setOpenFormModal(true)
    ) 

    const closeModal = () => (
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
    const registerTech = async (data) => {
        
        try {
        const response = await api.post('/users/techs', data)
        toast.success('Tecnologia criada com sucesso!',{
        theme: 'dark',
        autoClose: 1500
    } )
        loadUser()   
        console.log(response.data, userTechs);
        // setUserTechs([...userTechs, response.data])
        setOpenFormModal(false)
      } catch (error) {
        toast.error(error, {
            theme:'dark',
            autoClose: 1500
        })
      }
    }

    const deleteTech = async (current) => {

        try {
            console.log(current);
            // eslint-disable-next-line no-unused-vars
            const response = await api.delete(`/users/techs/${current}`)
            const removeTech = userTechs.filter(el => el.id !== current)
            console.log(removeTech)
            setUserTechs(removeTech)
        } catch (error) {
            console.error(error)
        }
    }



    return(
        <TechContext.Provider value= {{ openFormModal, setOpenFormModal, openModal, closeModal, registerTech, deleteTech }}>
            {children}
            {openFormModal && <FormModal />}
        </TechContext.Provider>

    )    
}