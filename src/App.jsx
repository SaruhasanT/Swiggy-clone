import Header from "./components/Header";
import Body from "./components/Body";
import Offers from "./components/Offers";
import Help from "./components/Help";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      { path: "offers", element: <Offers /> },
      { path: "help", element: <Help /> },
    ],
  },
]);

export default RouterProvider;
