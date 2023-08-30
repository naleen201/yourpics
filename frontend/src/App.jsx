import './App.css'
import NavBar from '../src/boilerplate/NavBar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default App
