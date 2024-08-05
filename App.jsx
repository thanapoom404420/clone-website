import { useState } from 'react'
import './App.css'
import Nav from './Nav'
import Grid from './Grid'
import People from './People'
import Pictures from './Pictures'
import Bottom from './Bottom'

function App() {
 

  return (
    <>
    <div className='overflow-x-hidden'>
   <Nav/>
   <Grid/>
   <People/>
   <Pictures/>
   <Bottom/>
   </div>
    </>
  )
}

export default App
