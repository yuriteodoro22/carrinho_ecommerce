import { Home } from "./pages/home";
import { Description } from "./pages/description";
import { Cart } from "./pages/cart";
import { Layout } from "./Components/layout";
import { Error } from "./pages/error";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path:'/cart',
        element: <Cart/>
      },
      {
        path: '/products/:id',
        element: <Description/>
      }    
    ]
  },
  {
    path: '*',
    element: <Error/>
  }
])

export {router};