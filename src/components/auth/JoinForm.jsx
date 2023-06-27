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
import qs from "qs";

export default function MainBanner() {
  const [email, setEmail] = useState("");
  const [nick, setNick] = useState("");
  const [passwd, setPasswd] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [imgContext, setImgContext] = useState("");

  useEffect(() => {
    setDupEmail(false);
    setDupNick(false);
  }, [email, nick]);

  const [dupNick, setDupNick] = useState(false);
  const [dupEmail, setDupEmail] = useState(false);

  const EmailDup = async (e) => {
    e.preventDefault();
    let emailDupResult = await axios
      .get("/v1/dup-email", { params: { email: email } })
      .then(function (res) {
        if (res.data.status === 200) {
          alert("가입 가능한 이메일입니다.");
          setDupEmail(true);
        } else {
          alert("중복된 이메일입니다.");
          setDupEmail(false);
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  const nickDup = async (e) => {
    e.preventDefault();
    let nickDupResult = await axios
      .get("/v1/dup-nickname", { params: { nickname: nick } })
      .then(function (res) {
        if (res.data.status === 200) {
          alert("가입 가능한 닉네임입니다.");
          setDupNick(true);
        } else {
          alert("중복된 닉네임입니다.");
          setDupNick(false);
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const joinSubmit = async (e) => {
    e.preventDefault();
    let data = { email, nick, passwd, name, phone, address, imgContext };
    if (!dupEmail) {
      alert("이메일 중복검사를 해주세요.");
      return false;
    }
    if (!dupNick) {
      alert("닉네임 중복검사를 해주세요.");
      return false;
    }
    let sendData = await axios
      .post("/v1/sign", qs.stringify(data))
      .then(function (res) {
        if (res.data.status === 200) {
          alert("회원가입 성공.");
          window.location.href = "/";
        } else {
          alert("회원가입 실패.");
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
              value={email}
              data-type="email"
            />
            <button className="dup-check-btn" onClick={EmailDup}>
              중복확인
            </button>
          </div>
          <div className="form-item">
            <div className="form-item-icon">
              <CiLock />
            </div>
            <input
              type="password"
              placeholder="비밀번호"
              onChange={(e) => setPasswd(e.target.value)}
              value={passwd}
              data-type="passwd"
            />
          </div>
          <div className="form-item">
            <div className="form-item-icon">
              <CiUser />
            </div>
            <input
              type="text"
              placeholder="닉네임"
              onChange={(e) => setNick(e.target.value)}
              value={nick}
              data-type="nickname"
            />
            <button className="dup-check-btn" onClick={nickDup} value="">
              중복확인
            </button>
          </div>
          <div className="form-item">
            <div className="form-item-icon">
              <CiUser />
            </div>
            <input
              type="text"
              placeholder="이름"
              onChange={(e) => setName(e.target.value)}
              value={name}
              data-type="name"
            />
          </div>
          <div className="form-item">
            <div className="form-item-icon">
              <CiPhone />
            </div>
            <input
              type="text"
              placeholder="연락처"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              data-type="phone"
            />
          </div>
          <div className="form-item">
            <div className="form-item-icon">
              <CiHome />
            </div>
            <input
              type="text"
              placeholder="주소 입력(선택)"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              data-type="address"
            />
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
            <input
              type="text"
              placeholder="프로필 사진(선택)"
              value="sample.png"
              data-type="imgContext"
              disabled="disabled"
            />
            <button className="dup-check-btn" value="">
              파일첨부
            </button>
          </div>
        </div>
      </form>
      <div className="join-submit">
        <button className="join-submit-btn" onClick={joinSubmit}>
          회원가입
        </button>
      </div>
    </div>
  );
}
