import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import ServiceDetailPage from "../pages/ServiceDetailPage";
import TeamPage from "../pages/TeamPage";
import TeamMemberDetailPage from "../pages/TeamMemberDetailPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import VertizeAiPage from "../pages/VertizeAiPage";
import RootLayout from "../components/RootLayout";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "/services/:serviceSlug",
        element: <ServiceDetailPage />,
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
        path: "/vertize-ai",
        element: <VertizeAiPage />,
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
