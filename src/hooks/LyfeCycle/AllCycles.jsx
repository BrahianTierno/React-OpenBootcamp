import { useEffect } from "react"


export const AllCycles = () => {

    useEffect(() => {
      console.log("Compoente creado");

      const intervalID = setInterval(() => {
        document.title = `${new Date()}`
        console.log("actualizacion de componete"); 
      }, 1000);
    
      return () => {
        console.log("Componente va a desparecer");
        document.title = "Tiempo detenido"
        clearInterval(intervalID)
      }
    }, [])
    

  return (
    <div>AllCycles</div>
  )
}
