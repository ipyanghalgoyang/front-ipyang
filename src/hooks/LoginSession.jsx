import { useCookies } from "react-cookie";

const [cookies, setCookies, removeCookies] = useCookies("[id]");

function cookieSet(id) {
  setCookies("id", id, { path: "/" });
}
