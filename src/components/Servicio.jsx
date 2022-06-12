
const Servicio = ({servicio, setServicio, eliminarServicio}) => {

    

      


  const {nombre , descripcion, id } = servicio;

  const handleEliminar = () => {

    const confirmarEliminar = confirm(' Confirmas que Deseas Eliminar este Servicio');

    if(confirmarEliminar){
      eliminarServicio(id)
    }

  }

  return (
    <div className="">
    <div className='m-5 bg-white shadow-md px-5 py-10 rounded-lg font-bold text-center w-1/4  '>
        <h2 className='text-2xl mb-8'>{nombre}</h2>
        <h2 className='mb-10'>{descripcion}</h2>

    <div className="flex justify-between">
    
      <button
        type="button"
        className="py-2 px-5 bg-violet-500 hover:bg-violet-800 text-white font-bold uppercase rounded-lg"
        onClick={() =>setServicio(servicio)}
        >Editar</button>


    
      <button
        type="button"
        className="py- px-5 bg-red-600 hover:bg-red-900 text-white font-bold uppercase rounded-lg"
        onClick={handleEliminar}
      >Eliminar</button>

    </div>
  </div>
  </div>
  )
}

export default Servicio