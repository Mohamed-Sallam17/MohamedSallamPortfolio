import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
// import MouseGlow from "./MouseGlow"

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <MouseGlow/> */}
      <Header/>
      <main className="flex-grow">
        <Outlet/>
      </main>
      <Footer/>
    </div>

  )
}

export default Layout
