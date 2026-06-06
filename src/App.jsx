import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Layout from './layout'
import History from './pages/History'
import Saved from './pages/Saved'
import Summary from "./pages/article-summary"
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <Navbar/>
    <Routes> 
      <Route path='/' element={<Layout/>}>
        <Route index element={<Hero/>}/>
        <Route path='/history' element={<History/>}/>
        <Route path='/saved' element={<Saved/>}/>
      </Route>
      <Route path='/summary' element={<Summary/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
