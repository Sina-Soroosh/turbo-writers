import Index from "./pages/Index/Index";
import Articles from "./pages/Articles/Articles";

const router = [
  { path: "/", element: <Index /> },
  { path: "/articles", element: <Articles /> },
];

export default router;
