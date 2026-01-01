import Header from "@/components/uis/Header"
import "./page.less"
import { Outlet } from "react-router"


export const Page = () => {
    return (
        <div className="container">
          <Header></Header>
          <main className="main">
            <Outlet />
          </main>
        </div>
    )
}