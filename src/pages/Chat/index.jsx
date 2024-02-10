import { useMemo, useState } from 'react'
import './style.css'
import MessageList from '../../components/MessageList'
import { getSocket } from '../../socket'
import useMessageList from '../../hooks/useMessageList'
import { useNavigate } from 'react-router-dom'
import { Button, Input } from '@nextui-org/react'
import { SendIcon } from '../../components/Icons'

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
        <Input
          type='text'
          label='Mensaje'
          className='max-w-xs'
          value={message}
          onChange={handleInputChange}
        />
        <Button isIconOnly color='danger' aria-label='Like' type='submit'>
          <SendIcon />
        </Button>
      </form>
    </main>
  )
}
