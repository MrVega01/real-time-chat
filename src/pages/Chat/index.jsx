import { useMemo, useState } from 'react'
import './style.css'
import MessageList from '../../components/MessageList'
import { getSocket } from '../../socket'
import useMessageList from '../../hooks/useMessageList'
import { useNavigate } from 'react-router-dom'

export default function Chat () {
  const navigate = useNavigate()
  const user = window.localStorage.getItem('username')
  if (!user) navigate('/')

  const socket = useMemo(() => getSocket({ user }), [])
  const [message, setMessage] = useState('')
  const { messageList } = useMessageList({ socket })

  const handleInputChange = ({ target }) => setMessage(target.value)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (message) {
      socket.emit('chat message', message)
      setMessage('')
    }
  }

  return (
    <main className='chat'>
      <section className='messagesContainer'>
        <MessageList messages={messageList} />
      </section>
      <form onSubmit={handleSubmit}>
        <input value={message} onChange={handleInputChange} />
        <button>Enviar</button>
      </form>
    </main>
  )
}
