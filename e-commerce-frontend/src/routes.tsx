import About from "./pages/About"
import Collections from "./pages/Collections"
import { Contact } from "./pages/Contact"
import Men from "./pages/Men"
import Women from "./pages/Women"

export const routes:{
    path: string,
    name: string,
    element: JSX.Element
}[] = [
    {
        path: "/collections",
        name: "Collections",
        element: <Collections/>
    },
    {
        path: "/women",
        name: "Women",
        element: <Women/>
    },
    {
        path: "/men",
        name: "Men",
        element: <Men/>
    },
    {
        path: "/about",
        name: "About",
        element: <About/>
    },
    {
        path: "/contact",
        name: "Contact",
        element: <Contact/>
    }
]