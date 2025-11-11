import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import Landing from "./pages/Landing";
import Cocktail from "./pages/Cocktail";
import Newsletter from "./pages/Newsletter";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "cocktail",
        element: <Cocktail />,
      },
      {
        path: "newsletter",
        element: <Newsletter />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
