import React from 'react'
import { Outlet } from 'react-router-dom'
import Servicio from './Servicio'

const Main = ({servicios, setServicio, eliminarServicio}) => {

      console.log(servicios)
  return (
   <>

      <main className='w-3/4 '>
                <Outlet/>
              
             {servicios.map(servicio=>{
        return(
             <Servicio
                key={servicio.id}
                servicio={servicio}
                setServicio={setServicio}
                eliminarServicio={eliminarServicio}
             />
        )
    })} 
   
            </main> 
        
    </>
  )
}

export default Main