import "../../css/auth.css";
import { CiMail, CiLock, CiUser, CiHome, CiPhone, CiFileOn } from 'react-icons/ci';

export default function MainBanner() {
  return (
    <div className="join-wrap">
      <div className="join-title">
        <h2>CREATE YOUR ACCOUNT</h2>
      </div>
      <form action="">
        <div className="join-form">
          <div className="form-item">
            <div className="form-item-icon"><CiMail /></div>
            <input type="text" placeholder="이메일" />
          </div>
          <div className="form-item">
            <div className="form-item-icon"><CiLock /></div>
            <input type="text" placeholder="비밀번호" />
          </div>
          <div className="form-item">
            <div className="form-item-icon"><CiUser /></div>
            <input type="text" placeholder="닉네임" />
          </div>
          <div className="form-item">
            <div className="form-item-icon"><CiPhone /></div>
            <input type="text" placeholder="연락처" />
          </div>
          <div className="form-item">
            <div className="form-item-icon"><CiHome /></div>
            <input type="text" placeholder="주소 입력(선택)" />
          </div>
          <div className="form-item">
            <div className="form-item-icon"><CiHome /></div>
            <input type="text" placeholder="상세주소(선택)" />
          </div>
          <div className="form-item">
            <div className="form-item-icon"><CiFileOn /></div>
            <input type="text" placeholder="프로필 사진(선택)" />
          </div>
        </div>
      </form>
    </div>
  );
}
