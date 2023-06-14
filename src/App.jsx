import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "views/RootLayout/RootLayout";
import LoginView from "views/LoginView/LoginView";
import RetrievePasswordView from "views/RetrievePasswordView/RetrievePasswordView";

// import "./App.scss"; //TODO

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <LoginView /> },
      { path: "/retrieve-password", element: <RetrievePasswordView /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
