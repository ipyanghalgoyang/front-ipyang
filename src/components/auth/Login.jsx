import "../../css/auth.css";
import { CiMail, CiLock, } from "react-icons/ci";
import { useState, useEffect } from "react";
import axios from "axios";
import qs from "qs";

export default function MainBanner() {

  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");

  const LoginSubmit = async (e) => {
    e.preventDefault();
    let data = { email, passwd };
    if (!email) {
      alert("이메일을 입력해주세요.");
      return false;
    }
    if (!passwd) {
      alert("비밀번호를 입력해주세요.");
      return false;
    }
    let sendData = await axios
      .post("/v1/login", qs.stringify(data))
      .then(function (res) {
        if (res.data.status === 200) {
          alert("로그인 성공");
          window.location.href = "/";
        } else {
          alert("로그인 실패.");
        }
      })
      .catch(function (err) {
        console.log(err);
      });
    console.log(data);
  };

  return (
    <div className="join-wrap">
      <div className="join-title">
        <h2>입양할고양 로그인</h2>
      </div>
      <div>
        <form action="">
          <div className="join-form">
            <div className="form-item">
              <div className="form-item-icon">
                <CiMail />
              </div>
              <input
                type="text"
                placeholder="이메일"
                data-type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-item">
              <div className="form-item-icon">
                <CiLock />
              </div>
              <input
                type="password"
                placeholder="비밀번호"
                data-type="passwd"
                onChange={(e) => setPasswd(e.target.value)}
              />
            </div>
          </div>
        </form>
        <div className="join-submit">
          <button className="join-submit-btn" onClick={LoginSubmit}>
            로그인
          </button>
        </div>
      </div>
    </div>
  );
}
