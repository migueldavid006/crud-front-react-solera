import React, { useEffect, useState } from 'react'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Services = () => {

  const [servicios, setServicios] = useState([]);
  const [servicio, setServicio] = useState({});


  useEffect(() => {
    const peticionLocalStorage = () =>{
      const serviciosLS = JSON.parse(localStorage.getItem('servicios')) ?? [];
      setServicios( serviciosLS);
    }

    peticionLocalStorage();

  }, [])
  

  useEffect(() => {
    localStorage.setItem('servicios', JSON.stringify( servicios ));
  }, [servicios])
  


  const eliminarServicio = (id) => {
    const serviciosUpdate =servicios.filter(servicio => servicio.id !== id );
    setServicios(serviciosUpdate);

  }
  
  return (
    
    <>
    <h1>APP SERVIVIOS TOTALES</h1>
        <Navbar 
        /> 
        <div className='flex '>
          
             <Main
             
             servicios={servicios}
             setServicio={setServicio}
             eliminarServicio={eliminarServicio}
            

             />
          
        
            <Sidebar

               servicios={servicios}
               setServicios={setServicios}
               servicio={servicio}
               setServicio={setServicio}
            
            /> 

        </div>
    </>
  )
}

export default Services