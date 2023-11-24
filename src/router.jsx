import Index from "./pages/Index/Index";
import Articles from "./pages/Articles/Articles";

const router = [
  { path: "/", element: <Index /> },
  { path: "/articles", element: <Articles /> },
  { path: "/articles/:page", element: <Articles /> },
];

export default router;
