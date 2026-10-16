import React from 'react'
import '../src/App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Flow from './components/Flow/Flow'
import Contract from './components/Contract/Contract'
import Create from './components/Create/Create'
import Pressplay from './components/Pressplay/Pressplay'

const App = () => {
  return (
    <div>
         <Header />
         <Hero />
         <Flow />
         <Contract />
         <Create />
         <Pressplay />
    </div>
  )
}

export default App