import { Outlet } from 'react-router-dom'
import Contact from '../sections/Contact'

export default function ServicePage() {
  return (
    <>
      <Outlet />
      <Contact />
    </>
  )
}
