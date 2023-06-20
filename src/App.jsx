import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomeView from "views/HomeView/HomeView";
import LoginForm from "components/LoginForm/LoginForm";
import RetrievePasswordForm from "components/RetrievePasswordForm/RetrievePasswordForm";

import "./App.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeView />,
    children: [
      { path: "/", element: <LoginForm /> },
      { path: "/retrieve-password", element: <RetrievePasswordForm /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} className="app" />;
}

export default App;
