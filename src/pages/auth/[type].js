import { useRouter } from 'next/router'
import LoginPage from '@/components/Login'
import RegisterPage from '@/components/Register'

const AuthPage = () => {
  const router = useRouter()
  const { type } = router.query

 return (
   <>
     {type === 'login' && <LoginPage />}
     {type === 'register' && <RegisterPage />}
   </>
 )
}
export default AuthPage