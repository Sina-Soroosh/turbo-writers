import React from "react";
import "./BoxArticles.css";
import { Link } from "react-router-dom";

function BoxArticles({ children, title, btnText, btnLink }) {
  return (
    <div className="box-articles">
      <div className="container">
        <div className="content-box-articles">
          <div className="control-box-articles">
            <div className="title-box-articles">
              <h4>{title}</h4>
              <div className="svg-box-articles">
                <svg
                  className="svg-vector"
                  width={113}
                  height={107}
                  viewBox="0 0 113 107"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M55.5723 1.1456C65.3314 2.28858 74.5504 5.54609 82.7214 11.0161C90.7862 16.415 96.9572 23.7918 101.898 32.1575C107.312 41.3256 114.858 51.1759 112.584 61.5836C110.313 71.9819 97.9841 76.1425 90.6141 83.8056C83.7417 90.9512 79.9211 101.422 70.7267 105.106C61.2665 108.895 50.696 106.235 40.8137 103.755C30.5862 101.187 20.0682 98.174 12.7608 90.555C5.27593 82.751 1.15001 72.1341 0.147635 61.3548C-0.827103 50.8727 3.1934 40.9533 7.24511 31.2409C11.421 21.2307 14.8216 9.86589 24.0155 4.14049C33.1763 -1.5643 44.8608 -0.108938 55.5723 1.1456Z"
                    fill="#B7CCDF"
                    fillOpacity={0.25}
                  />
                </svg>
              </div>
            </div>
            {btnText ? (
              <div className="button-box-articles">
                <Link to={btnLink} className="btn-box-articles">
                  <span className="text-btn">{btnText}</span>
                  <div className="icon-btn">
                    <svg
                      className="more-svg"
                      width={26}
                      height={25}
                      viewBox="0 0 26 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        opacity={0.4}
                        d="M16.7544 11.5347L20.5098 11.2026C21.3525 11.2026 22.0358 11.8925 22.0358 12.7435C22.0358 13.5945 21.3525 14.2844 20.5098 14.2844L16.7544 13.9523C16.0933 13.9523 15.5573 13.4111 15.5573 12.7435C15.5573 12.0748 16.0933 11.5347 16.7544 11.5347Z"
                      />
                      <path
                        fill="currentColor"
                        d="M4.14372 11.5957C4.20242 11.5365 4.42169 11.286 4.62767 11.078C5.82925 9.77526 8.96663 7.64503 10.6079 6.9931C10.857 6.8891 11.4872 6.66769 11.8249 6.65204C12.1472 6.65204 12.4551 6.72696 12.7485 6.87457C13.1151 7.08144 13.4075 7.40796 13.5692 7.79263C13.6722 8.05877 13.8338 8.85831 13.8338 8.87285C13.9944 9.74619 14.0819 11.1663 14.0819 12.7363C14.0819 14.2303 13.9944 15.5923 13.8626 16.4802C13.8482 16.4958 13.6866 17.4877 13.5105 17.8276C13.1882 18.4494 12.5581 18.8341 11.8836 18.8341H11.8249C11.3853 18.8195 10.4617 18.4337 10.4617 18.4203C8.90794 17.7684 5.84475 15.741 4.61328 14.3936C4.61328 14.3936 4.26554 14.0469 4.11493 13.8311C3.88015 13.5202 3.76276 13.1355 3.76276 12.7509C3.76276 12.3215 3.89455 11.9223 4.14372 11.5957Z"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            ) : null}
          </div>
          <div className="row">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default BoxArticles;
