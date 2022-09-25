import React, { useState } from 'react'
import List from '../Util/List'


const bodycontainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#282c34',
  padding: '10px'

}

const todoContainer = {

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: 'aqua',
  borderRadius: '10px',
  width: '600px',
  boxShadow: '0 0 10px 0 rgba(255,255,255,.5)'


}

//state variable





function App() {
  return (
    <div style={bodycontainer}>
      <div style={todoContainer}>
        <h1>Accio Todo</h1>

        <List />
      </div>

    </div >
  )
}

export default App