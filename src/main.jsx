import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { AuthProvider } from "./contexts/authContext.jsx";
import Layout from "./components/Layout";
import MovieSearchApp from "./components/movieSearch/MovieSearchApp";
import BlogDetails from "./components/BlogDetails";
import Blog from "./components/Blog";

const router = createBrowserRouter([
  {
    element: <Layout></Layout>,
    children: [
      {
        path: "/movies-search",
        element: <MovieSearchApp></MovieSearchApp>,
      },
      {
        path: "/homePage",
        element: <div>Home Page</div>,
      },
      {
        path: "/Blog",
        element: <Blog></Blog>,
      },
      {
        path: "/About",
        element: <div>About</div>,
      },
      {
        path: "/Blog/:id",
        element: <BlogDetails></BlogDetails>,
      },
    ],
  },
  {
    path: "/sign-in",
    element: <div>Sign in</div>,
  },
  {
    path: "*",
    element: <div>this is 404</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
);
