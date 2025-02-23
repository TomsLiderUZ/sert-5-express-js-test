import uniqueId from "../hooks/useId";
import Home from "../pages/home/index";
import Project from "../components/Project/index";
import ProjectCreate from "../components/ProjectCreate/index";
import ProjectHistory from "../components/ProjectHistory/index";
import NotPage from "../pages/notFound/index";

export const navbar = [
  {
    id: uniqueId,
    title: "Home - Painter",
    path: "/home",
    element: <Home />,
    private: false,
    hidden: false,
  },
  {
    id: uniqueId,
    title: "Project - Painter",
    path: "/project",
    element: <Project />,
    private: false,
    hidden: false,
  },
  {
    id: uniqueId,
    title: "Create a project - Painter",
    path: "/project/create",
    element: <ProjectCreate />,
    private: false,
    hidden: false,
  },
  {
    id: uniqueId,
    title: "Project history - Painter",
    path: "/project/history",
    element: <ProjectHistory />,
    private: false,
    hidden: false,
  },
  {
    id: uniqueId,
    title: "404 Not Found",
    path: "*",
    element: <NotPage />,
    private: false,
    hidden: false,
  },
];
