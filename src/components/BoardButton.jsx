import { useNavigate } from "react-router-dom";

export default function BoardButton(props) {

  let func = null;
  const navigate = useNavigate();

  if (props.func === "goback") {
    func = props.func;
  }

  return (

    <>
      <button className="board_btn" onClick={() => { if (func) navigate(-1) }}>{props.name}</button>
    </>
  );
}
