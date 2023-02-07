/**
 * Ejemplo de uso del metodo componentwillunmount para clase 
 * y ejemplo de uso de hooks para componente funcional
 */

import React, { Component, useEffect } from 'react'

export default class WillUnmount extends Component {

    componentWillUnmount(){
        console.log("Comportamiento antes de que el componente desaparezca");
    }

  render() {
    return (
      <div>
        <h1>WillUnmount</h1>
      </div>
    )
  }
}



export const WillUnmountHook = () => {

    useEffect(() => {
      //aqui no se pone nada
    
      return () => {
        console.log("Comportamiento antes de que el componente desaparezca");
        }
      
    }, [])
    

  return (
    <div>
        <h1>WillUnmount</h1>
    </div>
  )
}

