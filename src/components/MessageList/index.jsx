import { User } from '@nextui-org/react'
import './style.css'

export default function MessageList ({ messages }) {
  const currentUser = window.localStorage.getItem('username')
  return (
    <ul className='messages'>
      {
        messages.map(({ id, message, username }) =>
          <li key={id} className={currentUser === username ? 'messageOwner' : ''}>
            <User
              name={username}
              description={message}
              avatarProps={{
                src: `https://unavatar.io/twitter/${username}`
              }}
            />
          </li>
        )
      }
    </ul>
  )
}
