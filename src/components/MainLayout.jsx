export default function MainLayout() {
  return (
    <div className="header">
      <div className="header_wrap">
        <div className="logo"></div>
        <div className="util_wrap">
          <ul>
            <li>
              <a href="/">LOGIN</a>
            </li>
            <li>
              <a href="/">JOIN</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="gnb">
        <ul>
          <li>
            <a href="">입양하기</a>
          </li>
          <li>
            <a href="">공유하기</a>
          </li>
          <li>
            <a href="">홍보하기</a>
          </li>
          <li>
            <a href="">제보하기</a>
          </li>
          <li>
            <a href="">마켓</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
