import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import { MainPage } from "@/pages/main";
import { QuestionPage } from "@/pages/question";
import { NotFound } from "@/pages/notFound";

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/questions/public-questions/:id",
        element: <QuestionPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
