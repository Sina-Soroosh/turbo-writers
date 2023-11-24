import Index from "./pages/Index/Index";
import Articles from "./pages/Articles/Articles";
import ContactUs from "./pages/ContactUs/ContactUs";
import Category from "./pages/Category/Category";

const router = [
  { path: "/", element: <Index /> },
  { path: "/articles", element: <Articles /> },
  { path: "/articles/:page", element: <Articles /> },
  { path: "/category/:categoryName", element: <Category /> },
  { path: "/category/:categoryName/:page", element: <Category /> },
  { path: "/contact-us", element: <ContactUs /> },
];

export default router;
