import { BrowserRouter, Route,  Routes } from "react-router-dom"
import Services from "./layouts/Services"
import Autos from "./page/Autos"
import Hogar from "./page/Hogar"
import Salud from "./page/Salud"
import Todos from "./page/Todos"


function App() {

  return (
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Services/>}>
          
           <Route path="todos" element={<Todos/>}/>
          <Route path="autos" element={<Autos/>}/>
          <Route path="salud" element={<Salud/>}/>
          <Route path="hogar" element={<Hogar/>}/>
         

        </Route>

      </Routes>
    </BrowserRouter>

  )
}

export default App
