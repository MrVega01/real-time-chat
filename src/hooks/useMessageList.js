import { useEffect, useState } from 'react'

export default function useMessageList ({ socket }) {
  const [messageList, setMessageList] = useState([])

  useEffect(() => {
    socket.on('chat message', (msg) => {
      setMessageList(messages => [...messages, msg])
    })
  }, [])
  return { messageList }
}
