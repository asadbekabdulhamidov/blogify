import { createBrowserRouter } from "react-router-dom";

//import pages

import HomePage from "../pages/public/HomePage";
import PostDetailsPage from "../pages/admin/PostDetailsPage";
import PostPage from "../pages/public/PostPage";
import LoginPage from "../pages/auth/LoginPage";
import AdminCreatePostPage from "../pages/admin/AdminCreatePostPage";
import AdminDashboardPage from "../pages/admin/AdminDashboardPage";
import AdminEditPostPage from "../pages/admin/AdminEditPostPage";

//layouts
import AdminLayout from "../layouts/AdminLayout";
import PublicLayout from "../layouts/PublicLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/posts",
        element: <PostPage />,
      },
      {
        path: "/posts/:id",
        element: <PostDetailsPage />,
      },
    ],
  },

  { path: "/auth", element: <LoginPage /> },

  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminDashboardPage />,
      },
      { path: "create-post", element: <AdminCreatePostPage /> },
      { path: "edit-post/:id", element: <AdminEditPostPage /> },
    ],
  },
]);

export default routes;
