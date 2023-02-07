import {useState} from 'react'

export const RegisterForm = () => {

      
    const initialData = [

        {
            user: "",
            name:"",
            emial:"",
            password:""

        }    
        
    ]

    const [data, setData] = useState(initialData)


  return (
    <div>registerForm</div>
  )
}
