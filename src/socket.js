import { io } from 'socket.io-client'

// "undefined" means the URL will be computed from the `window.location` object
const URL = import.meta.env.VITE_API_URL

export function getSocket ({ user }) {
  return io(URL, {
    auth: {
      username: user
    }
  })
}
