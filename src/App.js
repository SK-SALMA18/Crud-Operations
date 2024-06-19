import React from "react"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import User from './User'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'


function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<User/>}></Route>
      <Route path="/create" element={<CreateUser/>}></Route>
      <Route path="/update/:id" element={<UpdateUser/>}></Route>
    </Routes>
    </BrowserRouter>
      
    </div>
  )
}

export default App
