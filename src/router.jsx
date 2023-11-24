import Index from "./pages/Index/Index";
import Articles from "./pages/Articles/Articles";
import ContactUs from "./pages/ContactUs/ContactUs";

const router = [
  { path: "/", element: <Index /> },
  { path: "/articles", element: <Articles /> },
  { path: "/articles/:page", element: <Articles /> },
  { path: "/contact-us", element: <ContactUs /> },
];

export default router;
