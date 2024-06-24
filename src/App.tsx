import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound.tsx";
import Applayout from "./UI/Applayout.tsx";
import HomePage from "./pages/HomePage.tsx";
import GlobalStyles from "./styles/GlobalStyles.ts";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
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
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);
function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </QueryClientProvider>
  );
}

export default App;
