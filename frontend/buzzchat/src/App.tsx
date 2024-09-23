import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import ChatPage from './pages/ChatPage'

function App() {

  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/chat' element={<ChatPage/>}/>
   </Routes>
  )
}

export default App
