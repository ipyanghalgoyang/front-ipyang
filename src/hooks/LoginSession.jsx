

const isLogin = sessionStorage.getItem("user_id");

export default function LoginSession() {
  if (!isLogin) {
    alert("로그인을 먼저 해주세요.");
    window.location.href = "/login";
  }
}
