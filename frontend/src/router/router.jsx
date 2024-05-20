import Layout from "../Layout"
import Home from "../Pages/Home"

const routes = [
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
            path: "/",
            element: <Home/>,

        }
      ]
    },
  ]


  export default routes