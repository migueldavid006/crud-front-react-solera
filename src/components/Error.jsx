
const Error = ({children}) => {
  return (
    (
        <div className='bg-red-700 text-white text-center p-3 uppercase font-bold rounded-md'>
          {children}
        </div>
      )
  )
}

export default Error