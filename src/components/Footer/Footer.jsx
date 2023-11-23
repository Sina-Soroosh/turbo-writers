import React, { useEffect } from "react";
import "./Footer.css";
import { getCategories } from "../../redux/store/categories";
import { useDispatch, useSelector } from "react-redux";

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
              <ui className="links">
                <li>
                  <a href="">
                    <i className="fa-solid fa-link"></i>
                    صفحه اصلی
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa-solid fa-link"></i>
                    کلیه مقالات
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa-solid fa-link"></i>
                    تماس با ما
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa-solid fa-link"></i>
                    درباره ما
                  </a>
                </li>
              </ui>
            </div>
            <div className="links-footer col-md-6 col-lg-4">
              <div className="top-links-footer">
                <div className="icon-links-footer">
                  <i className="fa-solid fa-paperclip"></i>
                </div>
                <p className="title-links-footer"> دسته بندی ها :</p>
              </div>
              <ui className="links">
                {categories.slice(0, 4).map((category) => (
                  <li key={category}>
                    <a href="">
                      <i className="fa-solid fa-link"></i>
                      {category}
                    </a>
                  </li>
                ))}
              </ui>
            </div>
            <div className="links-footer col-md-6 col-lg-4">
              <div className="top-links-footer">
                <div className="icon-links-footer">
                  <i className="fa-solid fa-paperclip"></i>
                </div>
                <p className="title-links-footer"> تماس با ما:</p>
              </div>
              <ui className="links">
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
              </ui>
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
