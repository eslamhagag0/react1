import NotFound from './Component/NotFound/NotFound'
import About from './Component/About/About'
import Contact from './Component/Contact/Contact'
import Home from './Component/Home/Home'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from './Layout/Layout'
import Protofolio from './Component/Protofolio/Protofolio'


let routers = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { index:'home', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'protofolio', element: <Protofolio /> },
      { path: '*', element: <NotFound /> }
    ]
  }
])


// let nav=document.querySelector('nav')
// console.log(nav.offsetTop);

window.addEventListener('scroll',function(){
  // if()

// console.log(window.offsetTop);

})

export default function App() {
  return (
   <RouterProvider router={routers} ></RouterProvider>
  )
}
