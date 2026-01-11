import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import TeamPage from "../pages/TeamPage";
import TeamMemberDetailPage from "../pages/TeamMemberDetailPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import VertiseAiPage from "../pages/VertiseAiPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/services",
    element: <ServicesPage />,
  },
  {
    path: "/team",
    element: <TeamPage />,
  },
  {
    path: "/team/:id",
    element: <TeamMemberDetailPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/vertise-ai",
    element: <VertiseAiPage />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
