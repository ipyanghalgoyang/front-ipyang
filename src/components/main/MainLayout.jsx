import { Link } from "react-router-dom";
import axios from "axios";
import qs from "qs";

export default function MainLayout() {
  let  isLogged = sessionStorage.getItem("user_id");
  const logoutSubmit = async (e) =>{
    e.preventDefault();
    let sendData = await axios
        .post("/v1/logout")
        .then(function (res) {
          if (res.data.status === 200) {
            sessionStorage.removeItem("user_id");
            window.location.href = "/";
          } else {
            alert("서버에 문제가있다. ㅇㅋ?");
          }
        })
  }
  return (
    <div className="header">
      <div className="header_wrap">
        <div className="logo"></div>
        {isLogged ?
         (
             <div className="util_wrap">
               <ul>
                 <li>
                   <button className="join-submit-btn" onClick={logoutSubmit}>
                     LOGOUT
                   </button>
                   {/*<Link to="/login"></Link>*/}
                 </li>
                 <li>
                   <Link to="/mypage">MyPage</Link>
                 </li>
               </ul>
             </div>
         ) : (
            <div className="util_wrap">
              <ul>
                <li>
                  <Link to="/login">LOGIN</Link>
                </li>
                <li>
                  <Link to="/join">JOIN</Link>
                </li>
              </ul>
            </div>
        )
      }
      </div>

      <div className="gnb">
        <ul>
          <li>
            <Link to="/adopt">입양하기</Link>
          </li>
          <li>
            <Link to="/board/INFO">공유하기</Link>
          </li>
          <li>
            <Link to="/board/PROMO">홍보하기</Link>
          </li>
          <li>
            <Link to="/board/REPORT">제보하기</Link>
          </li>
          <li>
            <Link to="/product">마켓</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
