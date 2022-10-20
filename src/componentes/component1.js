import Rct from 'react'
import { Component3 } from './component3'

class Component1 extends Rct.Component {
    render(){
        return(
            <div className='comp1Style'>
                <h1> Componente 1 </h1>
                <Component3 />
            </div>            
        )
    }
}

export default Component1