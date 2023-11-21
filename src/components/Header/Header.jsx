import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuHandler = () => {
    setShowMenu(true);
  };

  const hideMenuHandler = () => {
    setShowMenu(false);
  };

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
              <a href="">کلیه مقالات</a>
            </div>
          </li>
          <li className="sup-menu">
            <div className="content-sup-menu">
              <a href="">صفحه اصلی</a>
            </div>
          </li>
          <li className="sup-menu">
            <a href="">تماس با ما</a>
          </li>
          <li className="sup-menu">
            <div className="content-sup-menu">
              <a href="">دسته بندی ها</a>
              <div className="angle-sup-menu">
                <i className="fa-solid fa-angle-down"></i>
              </div>
            </div>

            <ul className="sub-menu">
              <li>
                <a href="">برنامه نویسی</a>
              </li>
              <li>
                <a href="">سایت</a>
              </li>
              <li>
                <a href="">هک و امنیت</a>
              </li>
              <li>
                <a href="">تکنولوژی</a>
              </li>
              <li>
                <a href="">نرم افزار</a>
              </li>
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
                <a href="">سوالات متداول</a>
              </li>
              <li>
                <a href="">درباره ما</a>
              </li>
              <li>
                <a href="">تماس با ما</a>
              </li>
              <li>
                <a href="">قوانین و مقررات</a>
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
                <h1>توربو نویسان</h1>
                <div className="logo-menu" onClick={showMenuHandler}>
                  <i className="fa-solid fa-bars"></i>
                </div>
              </div>
              <div className="search col-lg-9 col-12">
                <div className="logo-search">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <input type="search" placeholder="دنبال چه مطالبی میگردی؟" />
              </div>
            </div>
          </div>
          <div className="bottom-header">
            <div className="content-bottom-header">
              <div className="list-link">
                <ul className="row menu">
                  <li className="sup-menu col-2">
                    <a href="">کلیه مقالات</a>
                  </li>
                  <li className="sup-menu col-2">
                    <a href="">صفحه اصلی</a>
                  </li>
                  <li className="sup-menu col-2">
                    <a href="">تماس با ما</a>
                  </li>
                  <li className="sup-menu col-2">
                    <a href="">دسته بندی ها</a>
                    <div className="angle-sup-menu">
                      <i className="fa-solid fa-angle-down"></i>
                    </div>
                    <ul className="sub-menu">
                      <li>
                        <a href="">برنامه نویسی</a>
                      </li>
                      <li>
                        <a href="">سایت</a>
                      </li>
                      <li>
                        <a href="">هک و امنیت</a>
                      </li>
                      <li>
                        <a href="">تکنولوژی</a>
                      </li>
                      <li>
                        <a href="">نرم افزار</a>
                      </li>
                    </ul>
                  </li>
                  <li className="sup-menu col-2">
                    <a href="">صفحات جانبی</a>
                    <div className="angle-sup-menu">
                      <i className="fa-solid fa-angle-down"></i>
                    </div>
                    <ul className="sub-menu">
                      <li>
                        <a href="">سوالات متداول</a>
                      </li>
                      <li>
                        <a href="">درباره ما</a>
                      </li>
                      <li>
                        <a href="">تماس با ما</a>
                      </li>
                      <li>
                        <a href="">قوانین و مقررات</a>
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