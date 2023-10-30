import { useState } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'

export default function Auth () {
  const [userName, setUserName] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (userName) {
      window.localStorage.setItem('username', userName)
      return navigate('/chat')
    }
  }
  return (
    <main className='auth'>
      <form onSubmit={handleSubmit}>
        <label>
          Usuario
          <input value={userName} onChange={({ target }) => setUserName(target.value)} />
        </label>
        <button>Ingresar</button>
      </form>
    </main>
  )
}
