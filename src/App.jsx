import React from 'react'
import '../src/App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Flow from './components/Flow/Flow'
import Contract from './components/Contract/Contract'
import Create from './components/Create/Create'
import Pressplay from './components/Pressplay/Pressplay'
import Smart from "./components/Smart/Smart"
import Person from './components/Person/Person'
import Word from './components/Word/Word'
import Tools from './components/Tools/Tools'

const App = () => {
  return (
    <div>
         <Header />
         <Hero />
         <Flow />
         <Contract />
         <Create />
         <Pressplay />
         <Smart />
         <Person />
         <Word />
         <Tools />
    </div>
  )
}

export default App