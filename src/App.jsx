import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Chat from './pages/Chat'
import Auth from './pages/Auth'

function App () {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Auth} />
          <Route path='/chat' Component={Chat} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
