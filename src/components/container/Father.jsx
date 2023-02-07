import {useState} from 'react'
import Child from '../pure/Child'

const Father = () => {

 const [ name, setName] = useState("Brahian")

  function showMessage(text){
    alert(`Message recivied: ${text}`)
  }

  function updateName(newName) {
    setName(newName)
    
  }


  return (
    <div style={{background : 'tomato'}}>
        <Child name={name} send={showMessage} update={updateName}></Child>
    </div>
  )
}

export default Father