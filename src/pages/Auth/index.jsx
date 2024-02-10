import { useState } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
import { Button, Input } from '@nextui-org/react'

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
        <Input
          type='text'
          label='Usuario'
          className='max-w-xs'
          value={userName}
          onChange={({ target }) => setUserName(target.value)}
        />
        <Button
          radius='full'
          className='bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg'
          type='submit'
        >
          Ingresar
        </Button>
      </form>
    </main>
  )
}
