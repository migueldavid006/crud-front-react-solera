import React, { useEffect, useState } from 'react'
import Error from './Error'

const Sidebar = ({ servicios, setServicios, servicio, setServicio}) => {

  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')

  const [error, setError] = useState(false)

  useEffect(() => {
    
if( Object.keys(servicio).length > 0 ){
    setNombre(servicio.nombre)
    setDescripcion(servicio.descripcion)
}

  }, [servicio])
  

  



  const generarId = () =>{
    const randon = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(26)
    return randon + fecha;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if([nombre, descripcion].includes('')){
      console.log('hay al menos un lugar vacio');

      setError(true)
      return;
    }
    setError(false)

    const objetoServicio = {
      nombre, 
      descripcion,
     
    }

    if(servicio.id){

      objetoServicio.id = servicio.id;
      const servicioUpdate = servicios.map(servicioState => servicioState.id === 
        servicio.id ? objetoServicio : servicioState)
      
        setServicios(servicioUpdate)
        setServicio({})

    }else{

      objetoServicio.id =   generarId();
      setServicios([...servicios, objetoServicio]);
    }

    
    setNombre('')
    setDescripcion('')
  }
  return (

    <>
    <form 
        onSubmit={handleSubmit}
        className='bg-white shadow-md rounded-lg py-10 px-5'
        >
          { error && <Error><p>todos los campos son oblogatoriso</p></Error> }

           <div className='mb-5'>

           <label htmlFor='nombre' className='block font-bold'>nombre</label>
            <input 
            id='nombre'
            type="text"
            placeholder='nombre'
            className='border-2 p-2 mt-2 rounded-lg'
            value={nombre}
            onChange={(e)=>setNombre(e.target.value)}
            />

           </div>
       
           
           <div className='mb-5'>

           <label htmlFor='descripcion' className='block font-bold'>descripcion</label>
            <input 
            id='descripcion'
            type="text"
            placeholder='descipcion'
            className='border-2 p-2 mt-2 rounded-lg'
            value={descripcion}
            onChange={(e)=>setDescripcion(e.target.value)}

            />

           </div>
       
           

            <input 
            type="submit"
            className='bg-indigo-400 w-300 p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-colors rounded-md'
            value={ servicio.id ? "GUARDAR MODIFICACION"  : "Nuevo Servicio"}
        />

        </form>
     
    
    </>

  )
}

export default Sidebar