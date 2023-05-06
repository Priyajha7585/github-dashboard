import { useForm } from 'react-hook-form';
import { providers, signIn, useSession } from 'next-auth/react'

const RegisterPage = () => {
    const session = useSession();
    // console.log(session)
    const { register, handleSubmit } = useForm()
    if (session.status!=="unauthenticated") {
      return <p>You are already signed in</p>
    }

    const onSubmit = async (data) => {
      const { name, email, password } = data
      const result = await signIn('google', { name, email, password, callbackUrl: '/' })
      console.log(result)
    }
  
    return (
      <>
        <h1>Register</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" {...register('name')} />
  
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register('email')} />
  
          <label htmlFor="password">Password</label>
          <input type="password" id="password" {...register('password')} />
  
          <button type="submit" onClick={()=>console.log('register button clicked')}>Register with Google</button>
        </form>
      </>
    )
  }
export default RegisterPage  