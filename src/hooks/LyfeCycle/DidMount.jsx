/**
 * Ejemplo de uso del metodo y el hook de ciclo de vida 
 * en componete funcional
 */

import React, { Component, useEffect } from 'react'

export default class DidMount extends Component {

    componentDidMount(){
        console.log("Compartamiento antes del que el componete sea aniadio al DOM (renderize)");
    }

  render() {
    return (        
      <div>
        <h1>DidMount</h1>
      </div>
    )
  }
}





export const DidMountHook = () => {
    useEffect(() => {
        console.log("Compartamiento antes del que el componete sea aniadio al DOM (renderize)");
      
    }, [])
    
  return (
    <div>
      <h1>DidMount</h1>
    </div>
  )
}

