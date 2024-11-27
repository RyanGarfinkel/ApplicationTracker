import { Routes, Route } from "react-router-dom"
import Login from "./pages/login"

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<div>Home page!</div>} />
      <Route path='/login' element={<Login/>} />
    </Routes>
  )
}

export default App
