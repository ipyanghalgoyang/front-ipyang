import "../../css/auth.css";
import {
  CiMail,
  CiLock,
  CiUser,
  CiHome,
  CiPhone,
  CiFileOn,
} from "react-icons/ci";
import axios from "axios";
import { useState, useEffect } from "react";

export default function MainBanner() {
  useEffect(() => {
    setDupEmail(false);
  });

  const [email, setEmail] = useState("");
  const [dupEmail, setDupEmail] = useState(false);
  const EmailDup = async (e) => {
    e.preventDefault();
    let dupResult = await axios
      .get("/v1/dup-email", { params: { email: email } })
      .then(function (res) {
        if (res.data.status === 200) {
          alert("가입 가능한 이메일입니다.");
          setDupEmail(true);
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  return (
    <div className="join-wrap">
      <div className="join-title">
        <h2>CREATE YOUR ACCOUNT</h2>
      </div>
      <form action="">
        <div className="join-form">
          <div className="form-item">
            <div className="form-item-icon">
              <CiMail />
            </div>
            <input
              type="text"
              placeholder="이메일"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="dup-check-btn" onClick={EmailDup} value="">
              중복확인
            </button>
          </div>
          <div className="form-item">
            <div className="form-item-icon">
              <CiLock />
            </div>
            <input type="text" placeholder="비밀번호" />
          </div>
          <div className="form-item">
            <div className="form-item-icon">
              <CiUser />
            </div>
            <input type="text" placeholder="닉네임" />
            <button className="dup-check-btn">중복확인</button>
          </div>
          <div className="form-item">
            <div className="form-item-icon">
              <CiPhone />
            </div>
            <input type="text" placeholder="연락처" />
          </div>
          <div className="form-item">
            <div className="form-item-icon">
              <CiHome />
            </div>
            <input type="text" placeholder="주소 입력(선택)" />
          </div>
          <div className="form-item">
            <div className="form-item-icon">
              <CiHome />
            </div>
            <input type="text" placeholder="상세주소(선택)" />
          </div>
          <div className="form-item">
            <div className="form-item-icon">
              <CiFileOn />
            </div>
            <input type="text" placeholder="프로필 사진(선택)" />
            <button className="dup-check-btn" value="">
              파일첨부
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
