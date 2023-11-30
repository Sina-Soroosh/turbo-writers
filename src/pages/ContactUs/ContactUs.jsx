import React, { useRef } from "react";
import "./ContactUs.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";

function ContactUs() {
  const nameRef = useRef();
  const emailRef = useRef();
  const titleRef = useRef();
  const sweetAlert = withReactContent(Swal);
  const navigate = useNavigate();

  const showAlertError = (msg, element) => {
    sweetAlert
      .fire({
        title: msg,
        icon: "error",
        confirmButtonText: "متوجه شدم",
        color: "#a7a7b8",
        background: "#212529",
        confirmButtonColor: "#28a745",
      })
      .then(() => {
        element.focus();
      });
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (nameRef.current.value.length < 3) {
      showAlertError("نام حداقل باید 3 کارکتر باشد!!", nameRef.current);
    } else if (!emailRegex.test(emailRef.current.value)) {
      showAlertError("لطفا یک ایمیل معتبر وارد نمایید", emailRef.current);
    } else if (!titleRef.current.value) {
      showAlertError("لطفا موضوع را وارد نمایید", titleRef.current);
    } else {
      sweetAlert
        .fire({
          title: "پیغام شما با موفقیت ارسال شد",
          icon: "success",
          text: "درصورت نیاز به شما ایمیل ارسال میشود",
          confirmButtonText: "متوجه شدم",
          color: "#a7a7b8",
          background: "#212529",
          confirmButtonColor: "#28a745",
        })
        .then(() => {
          navigate("/");
        });
    }
  };

  return (
    <div className="contact-us">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="content-contact-us">
              <div className="title-contact-us">
                <h3>تماس با ما :</h3>
              </div>
              <form className="form-contact-us" onSubmit={submitFormHandler}>
                <div className="input-box">
                  <label htmlFor="name">نام شما</label>
                  <input type="text" name="name" ref={nameRef} />
                </div>
                <div className="input-box email-input">
                  <label htmlFor="email">ایمیل شما</label>
                  <input type="email" name="email" ref={emailRef} />
                </div>
                <div className="input-box">
                  <label htmlFor="title">موضوع</label>
                  <input type="text" name="title" ref={titleRef} />
                </div>
                <div className="input-box">
                  <label htmlFor="message">پیغام شما (اختیاری)</label>
                  <textarea name="message"></textarea>
                </div>
                <button className="submit-btn">ارسال پیام</button>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <div className="image-contact-us">
              <img src="/image/Contact-us-bro-1024x1024.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
