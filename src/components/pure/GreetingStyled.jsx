import {useState} from 'react'


export const GreetingStyled = (props) => {

//Dfiniendo estilos en constantes

const loggedStyle = {
    color: 'blue'
}

const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'

}

/**
 * Se genera un estado en el componente para saber si el
 * usuario esta o no logeado
 */
const [logged, setLogged] = useState(false)




  return (
    <div style={logged ? loggedStyle : unloggedStyle}>
        {logged ? <p>Hello, {props.name}</p> : <p>Please, login</p>}        
        <button onClick={() => {
            console.log('Boton pulsado');
            setLogged(!logged);
        }}>
            {logged ? 'Logout' : 'Login'}
        </button>
    </div>
    
  )
}
