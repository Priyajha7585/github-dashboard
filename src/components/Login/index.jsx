import styles from './Login.module.css'
import Sidebar from "./SideBar";
import Form from "./Form";
const Login = () => {
  
  return(
    <main className={styles.main}>
        <Sidebar />
        <Form />
      </main>
  )
};
export default Login;
