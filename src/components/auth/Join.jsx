import "../../css/auth.css";

export default function MainBanner() {
  return (
    <div className="join-wrap">
      <div className="join-title">
        <h2>CREATE YOUR ACCOUNT</h2>
      </div>
      <form action="">
        <div className="join-form">
          <h2 className="join-form-main-title">
            <span className="red">*</span> 표시는 필수 입력 항목입니다.
          </h2>
          <ul>
            <li className="col-6">
              <div className="inputbox">
                <input type="text" placeholder="이메일" />
                <label>이메일</label>
              </div>
            </li>
            <li className="col-6">
              <div className="inputbox">
                <input type="text" placeholder="이메일" />
                <label>이메일</label>
              </div>
            </li>
            <li className="col-6">
              <div className="inputbox">
                <input type="text" placeholder="이메일" />
                <label>이메일</label>
              </div>
            </li>
            <li className="col-6">
              <div className="inputbox">
                <input type="text" placeholder="이메일" />
                <label>이메일</label>
              </div>
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
}
