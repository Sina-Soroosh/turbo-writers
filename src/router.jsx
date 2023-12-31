import Index from "./pages/Index/Index";
import Articles from "./pages/Articles/Articles";
import ContactUs from "./pages/ContactUs/ContactUs";
import Category from "./pages/Category/Category";
import ArticleInfo from "./pages/ArticleInfo/ArticleInfo";
import Search from "./pages/Search/Search";
import FrequentlyQuestions from "./pages/FrequentlyQuestions/FrequentlyQuestions";
import Rules from "./pages/Rules/Rules";
import AboutUs from "./pages/AboutUs/AboutUs";
import Error404 from "./pages/Error404/Error404";

const router = [
  { path: "/", element: <Index /> },
  { path: "/articles", element: <Articles /> },
  { path: "/articles/:page", element: <Articles /> },
  { path: "/category/:categoryName", element: <Category /> },
  { path: "/category/:categoryName/:page", element: <Category /> },
  { path: "/contact-us", element: <ContactUs /> },
  { path: "/article-info/:shortNameArticle", element: <ArticleInfo /> },
  { path: "/search/:keyword", element: <Search /> },
  { path: "/search/:keyword/:page", element: <Search /> },
  { path: "/frequently-questions", element: <FrequentlyQuestions /> },
  { path: "/rules", element: <Rules /> },
  { path: "/about-us", element: <AboutUs /> },
  { path: "/*", element: <Error404 /> },
];

export default router;
