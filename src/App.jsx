import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import Landing from "./pages/Landing";
import Cocktail from "./pages/Cocktail";
import Newsletter from "./pages/Newsletter";
import About from "./pages/About";
import Error from "./pages/Error";
import SinglePageError from "./pages/SinglePageError";
import { loader as landingLoader } from "./pages/Landing";
import { action as newsletterAction } from "./pages/Newsletter";
import { loader as singleCocktailLoader } from "./pages/Cocktail";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader(queryClient),
      },
      {
        path: "cocktail/:id",
        errorElement: <SinglePageError />,
        loader: singleCocktailLoader(queryClient),
        element: <Cocktail />,
      },
      {
        path: "newsletter",
        element: <Newsletter />,
        action: newsletterAction,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
