import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/store/categories";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const location = useLocation();
  const searchRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const showMenuHandler = () => {
    setShowMenu(true);
  };

  const hideMenuHandler = () => {
    setShowMenu(false);
  };

  const searchToArticles = () => {
    navigate(`/search/${searchRef.current.value}`);
    searchRef.current.value = "";
  };

  useEffect(hideMenuHandler, [location]);

  return (
    <>
      {showMenu ? <div id="cover-page" onClick={hideMenuHandler}></div> : null}
      <div className={`menu-mobile ${showMenu ? "active" : null}`}>
        <div className="logo-close" onClick={hideMenuHandler}>
          <i className="fa-solid fa-xmark"></i>
        </div>
        <ul className="menu">
          <li className="sup-menu">
            <div className="content-sup-menu">
              <Link to="/articles">کلیه مقالات</Link>
            </div>
          </li>
          <li className="sup-menu">
            <div className="content-sup-menu">
              <Link to="/">صفحه اصلی</Link>
            </div>
          </li>
          <li className="sup-menu">
            <Link to="/contact-us">تماس با ما</Link>
          </li>
          <li className="sup-menu">
            <div className="content-sup-menu">
              <a href="">دسته بندی ها</a>
              <div className="angle-sup-menu">
                <i className="fa-solid fa-angle-down"></i>
              </div>
            </div>

            <ul className="sub-menu">
              {categories.map((category) => (
                <li key={category}>
                  <Link to={`/category/${category}`}>{category}</Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="sup-menu">
            <div className="content-sup-menu">
              <a href="">صفحات جانبی</a>
              <div className="angle-sup-menu">
                <i className="fa-solid fa-angle-down"></i>
              </div>
            </div>
            <ul className="sub-menu">
              <li>
                <Link to="/frequently-questions">سوالات متداول</Link>
              </li>
              <li>
                <Link to="/about-us">درباره ما</Link>
              </li>
              <li>
                <Link to="/contact-us">تماس با ما</Link>
              </li>
              <li>
                <Link to="/rules">قوانین و مقررات</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <header className="header">
        <div className="container">
          <div className="top-header">
            <div className="row">
              <div className="logo col-lg-3 col-12">
                <Link to="/">
                  <h1>توربو نویسان</h1>
                </Link>
                <div className="logo-menu" onClick={showMenuHandler}>
                  <i className="fa-solid fa-bars"></i>
                </div>
              </div>
              <div className="search col-lg-9 col-12">
                <div className="logo-search" onClick={searchToArticles}>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <input
                  type="search"
                  placeholder="دنبال چه مطالبی میگردی؟"
                  ref={searchRef}
                  onKeyDown={(e) => e.keyCode === 13 && searchToArticles()}
                />
              </div>
            </div>
          </div>
          <div className="bottom-header">
            <div className="content-bottom-header">
              <div className="list-link">
                <ul className="row menu">
                  <li className="sup-menu col-2">
                    <Link to="/articles">کلیه مقالات</Link>
                  </li>
                  <li className="sup-menu col-2">
                    <Link to="/">صفحه اصلی</Link>
                  </li>
                  <li className="sup-menu col-2">
                    <Link to="/contact-us">تماس با ما</Link>
                  </li>
                  <li className="sup-menu col-2">
                    <Link href="">دسته بندی ها</Link>
                    <div className="angle-sup-menu">
                      <i className="fa-solid fa-angle-down"></i>
                    </div>
                    <ul className="sub-menu">
                      {categories.map((category) => (
                        <li key={category}>
                          <Link to={`/category/${category}`}>{category}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className="sup-menu col-2">
                    <a href="">صفحات جانبی</a>
                    <div className="angle-sup-menu">
                      <i className="fa-solid fa-angle-down"></i>
                    </div>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/frequently-questions">سوالات متداول</Link>
                      </li>
                      <li>
                        <Link to="/about-us">درباره ما</Link>
                      </li>
                      <li>
                        <Link to="/contact-us">تماس با ما</Link>
                      </li>
                      <li>
                        <Link to="/rules">قوانین و مقررات</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
