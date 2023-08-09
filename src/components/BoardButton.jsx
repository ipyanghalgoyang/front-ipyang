import { useNavigate } from "react-router-dom";

export default function BoardButton(props) {

  var navigate = useNavigate();

  console.log(props);
  if (props.func === "goback") {
    var func = props.func;
  }

  return (

    <>
      <button className="board_btn" onClick={() => { if (func) navigate(-1) }}>{props.name}</button>
    </>
  );
}
