import React, { useEffect } from "react";
import "./Footer.css";
import { getCategories } from "../../redux/store/categories";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Footer() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="top-footer">
          <div className="text-footer">
            <h3>توربو نویسان</h3>
          </div>
        </div>
        <div className="content-footer">
          <div className="row">
            <div className="links-footer col-md-6 col-lg-4">
              <div className="top-links-footer">
                <div className="icon-links-footer">
                  <i className="fa-solid fa-paperclip"></i>
                </div>
                <p className="title-links-footer"> دسترسی سریع :</p>
              </div>
              <ul className="links">
                <li>
                  <Link to="/">
                    <i className="fa-solid fa-link"></i>
                    صفحه اصلی
                  </Link>
                </li>
                <li>
                  <Link to="/articles">
                    <i className="fa-solid fa-link"></i>
                    کلیه مقالات
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us">
                    <i className="fa-solid fa-link"></i>
                    تماس با ما
                  </Link>
                </li>
                <li>
                  <Link to="/about-us">
                    <i className="fa-solid fa-link"></i>
                    درباره ما
                  </Link>
                </li>
              </ul>
            </div>
            <div className="links-footer col-md-6 col-lg-4">
              <div className="top-links-footer">
                <div className="icon-links-footer">
                  <i className="fa-solid fa-paperclip"></i>
                </div>
                <p className="title-links-footer"> دسته بندی ها :</p>
              </div>
              <ul className="links">
                {categories.slice(0, 4).map((category) => (
                  <li key={category}>
                    <Link to={`/category/${category}`}>
                      <i className="fa-solid fa-link"></i>
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="links-footer col-md-6 col-lg-4">
              <div className="top-links-footer">
                <div className="icon-links-footer">
                  <i className="fa-solid fa-paperclip"></i>
                </div>
                <p className="title-links-footer"> تماس با ما:</p>
              </div>
              <ul className="links">
                <li>
                  <a href="tel:+989914317972">
                    <i className="fa-solid fa-phone"></i>
                    09914317972
                  </a>
                </li>
                <li>
                  <a href="mailto:sinasoroosh07@gmail.com">
                    <i className="fa-solid fa-envelope"></i>
                    sinasoroosh07@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copy-right-footer">
          <p> تمامی حقوق مادی و معنوی متعلق به توربو نویسان می باشد.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
