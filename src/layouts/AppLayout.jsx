import { Outlet } from 'react-router-dom'
import AppNavbar from '../components/AppNavbar'

const AppLayout = () => {
  return (
    <>  
      <AppNavbar/>
      <Outlet/>
    </>
  )
}

export default AppLayout