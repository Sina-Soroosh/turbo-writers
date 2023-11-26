import React from "react";
import "./Error404.css";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="err-404">
      <div className="container">
        <div className="row content-err-404">
          <div className="col-lg-7">
            <div className="title-err-404">
              <h5>
                ممکن است صفحه ای که به دنبال آن میگردید حذف شده باشد و یا آدرس
                آن را به درستی وارد نکرده باشید
              </h5>
            </div>
            <Link to="/">بازگشت به صفحه اصلی</Link>
          </div>
          <div className="col-lg-5">
            <div className="image-err-400">
              <img src="/public/image/404.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error404;
