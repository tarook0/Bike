import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound.tsx";
import Applayout from "./UI/Applayout.tsx";
import HomePage from "./pages/HomePage.tsx";
import GlobalStyles from "./styles/GlobalStyles.ts";
import ReportBikePage from "./pages/ReportBikePage.tsx";
import { DarkModeProvider } from "./context/DarkModeContext.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 10000,
    },
  },
});
const router = createBrowserRouter([
  {
    element: (
        <Applayout />
    ),
    children: [
      { index: true, element: <Navigate replace to={"homePage"} /> },
      { path: "homePage", element: <HomePage /> },
      { path: "homePage/:bikeId", element: <ReportBikePage /> },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);
function App() {
  return (
    <DarkModeProvider>

      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
