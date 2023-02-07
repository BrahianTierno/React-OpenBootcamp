/**
 * Componente que va a contener un formulario para autenticacion de usario
 */

import {useState} from 'react'
export const LoginForm = () => {

    
   
    const initialCredentials = [

        {
            user: "",
            password:""

        }    
        
    ]

    const [credentials, setCredentials] = useState(initialCredentials);


        

  return (
    <div>loginForm</div>
  )
}
