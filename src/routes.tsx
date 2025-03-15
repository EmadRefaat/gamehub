import { createBrowserRouter } from "react-router-dom";
import Layout from "./Pages/Layout";
import HomePage from "./Pages/HomePage";
import GameDetails from "./Pages/GameDetails";
import ErrorElement from "./Pages/ErrorElement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorElement />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "games/:slug",
        element: <GameDetails />,
      },
    ],
  },
]);

export default router;
