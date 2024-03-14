import React from 'react'
import Navbar from './Navbar'
import './style.css'
import Form from './Form'
import TaskProvider from './TaskProvider'
import DisplayNotes from './DisplayNotes';

const App = () => {
  return (
    <>
      <Navbar/>

      <TaskProvider>
        <div className='mainContainer'>
          <Form/>
          <DisplayNotes/>
        </div>
      </TaskProvider>
     
    </>
  )
}

export default App