import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import MouseGlow from "./MouseGlow"

function Layout() {
  return (
    <>
      <MouseGlow/>
      <Header/>
      <Outlet/>
      <Footer/>
    </>

  )
}

export default Layout
