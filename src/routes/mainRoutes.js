import { POSTS } from "../common/constants";
import DefaultLayout from "../layouts/default/DefaultLayout";
import Home from "../pages/home/Home";
import Posts from "../pages/posts/Posts";

const mainRoutes = (currentSurvey) => {
  return {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: `/${POSTS}/:userId`,
        element: <Posts />,
      },
    ],
  };
};

export default mainRoutes;
