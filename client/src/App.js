// import "./App.css";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   createBrowserRouter,
//   createRoutesFromElements,
//   RouterProvider,
// } from "react-router-dom";
// import Home from "./components/Home";
// import Layout from "./components/Layout";
// import RegisterPage from "./components/RegisterPage";
// import LoginPage from "./components/LoginPage";
// import CropDetails from "./components/CropDetails";
// import { useState } from "react";
// import { CropsContext } from "./context/CropsContext";
// import UserContextProvider from "./components/UserContext";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route index element={<Home />} />

//       <Route path="register" element={<RegisterPage />} />
//       <Route path="login" element={<LoginPage />} />
//       <Route path="cropDetails/:name" element={<CropDetails />} />
//     </Route>
//   )
// );

// function App() {
//   const [crops, setCrops] = useState(null);
//   const [user, setUser] = useState(null);
//   console.log(user);

//   return (
//     <CropsContext.Provider value={{ crops, setCrops }}>
//       <UserContextProvider value={{ user, setUser }}>
//         <RouterProvider router={router} />
//       </UserContextProvider>
//     </CropsContext.Provider>
//   );
// }

// export default App;

import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import CropDetails from "./components/CropDetails";
import { useState } from "react";
import { CropsContext } from "./context/CropsContext";
import { UserContextProvider } from "./components/UserContext";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="register"
        element={
          <PublicRoute>
            <RegisterPage />
          </PublicRoute>
        }
      />
      <Route
        path="login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        path="cropDetails/:name"
        element={
          <ProtectedRoute>
            <CropDetails />
          </ProtectedRoute>
        }
      />
    </Route>
  )
);

function App() {
  const [crops, setCrops] = useState(null);

  return (
    <CropsContext.Provider value={{ crops, setCrops }}>
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </CropsContext.Provider>
  );
}

export default App;
