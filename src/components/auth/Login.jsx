import "../../css/auth.css";

export default function MainBanner() {
  return (
    <div className="login-wrap">
      <div className="login-title">
        <h2>입양할고양 로그인</h2>
      </div>
      <div className="login-content">
        <form class="login-form" action="">
          <input
            type="text"
            class="login-value"
            placeholder="아이디를 입력하세요."
          />
          <input
            type="password"
            class="login-value"
            placeholder="비밀번호를 입력하세요."
          />
        </form>
      </div>
    </div>
  );
}
