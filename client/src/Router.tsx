import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./routes/Home";
import Krnews from "./components/Krnews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
        children: [
          {
            path: "krnews",
            element: <Krnews />,
          },
        ],
      },
    ],
  },
]);

export default router;
