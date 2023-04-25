import { useState } from 'react'

// import './App.css'
import Navbar from './Component/Navbar'
import Card from './Component/Card'
import Regiters from './Component/Form/Regiters'
import Login from './Component/Form/login'


function App() {


  return (
    <div>
      {/* <form>
        <label htmlFor="" className='fw-bold text-danger'>Subject : </label>
        <input type="text" placeholder='Type Your Subject here' /><br></br>
        <label htmlFor="" className='fw-bold text-danger'>Fees</label>
        <input type="text" placeholder='Type Your fees here' />
        <input type="button" value="Submit" />
      </form> */}
      {/* <Navbar></Navbar> */}
      {/* <Card></Card> */}
      <Regiters></Regiters>
      <Login></Login>
    </div>
  )
}

export default App
