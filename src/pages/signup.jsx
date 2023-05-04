// import { providers, csrfToken } from 'next-auth/client'
import providers from 'next-auth/providers/google';
import {csrfToken} from 'next-auth/react'
import { useState } from 'react'

export default function Register({ csrfToken }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()

    const result = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })

    const data = await result.json()

    if (!result.ok) {
      console.log('Error registering user:', data.message)
    } else {
      console.log('User registered successfully:', data)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="csrfToken" value={csrfToken} />
      <label>
        Email
        <input type="email" name="email" value={email} onChange={event => setEmail(event.target.value)} />
      </label>
      <label>
        Password
        <input type="password" name="password" value={password} onChange={event => setPassword(event.target.value)} />
      </label>
      <button type="submit">Register</button>
    </form>
  )
}

// export async function getServerSideProps(context) {
//   return {
//     props: {
//       providers: await providers(context),
//       csrfToken: await csrfToken(context)
//     }
//   }
// }
