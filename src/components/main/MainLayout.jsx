import { Link } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="header">
      <div className="header_wrap">
        <div className="logo"></div>
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
