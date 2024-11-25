// routes.js
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects"
// import ProjectListing from "./pages/ProjectListing"
import ErrorPage from "./pages/ErrorPage";

const routes = [
  {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
           {
              path: "/",
              element: <Home />
          }, 
          {
              path: "/about",
              element: <About />
          },
          {
              path: "/projects",
              element: <Projects />,
            //   children: [
            //     {
            //         path: "/project/:id",
            //         element: <ProjectListing />
            //     }
            //   ]
          }
      ]
  }
];

export default routes;