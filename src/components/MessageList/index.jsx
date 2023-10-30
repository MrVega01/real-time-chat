import './style.css'

export default function MessageList ({ messages }) {
  const currentUser = window.localStorage.getItem('username')

  return (
    <ul className='messages'>
      {
        messages.map(({ id, message, username }) =>
          <li key={id} className={currentUser === username ? 'messageOwner' : ''}>
            {message}<sub>{username}</sub>
          </li>
        )
      }
    </ul>
  )
}
