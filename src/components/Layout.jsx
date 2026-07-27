import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
// import MouseGlow from "./MouseGlow"

function Layout() {
  return (
    <div className="">
      {/* <MouseGlow/> */}
      <Header/>
      <main className="">
        <Outlet/>
      </main>
      <Footer/>
    </div>

  )
}

export default Layout
