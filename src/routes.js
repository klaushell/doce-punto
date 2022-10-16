import Layout1 from "./pages/Layout1/Layout_1";
import Layout2 from "../src/pages/Layout2/Layout2";
import Layout3 from "../src/pages/Layout3/Layout3";
import Layout4 from "../src/pages/Layout4/Layout4";
import Layout5 from "../src/pages/Layout5/Layout5";
import Layout6 from "../src/pages/Layout6/Layout6";
import Layout7 from "../src/pages/Layout7/Layout7";
import Layout8 from "../src/pages/Layout8/Layout8";
import Layout9 from "../src/pages/Layout9/Layout9";
import Layout10 from "../src/pages/Layout10/Layout10";
import Layout11 from "../src/pages/Layout11/Layout11";
import Layout12 from "../src/pages/Layout12/Layout12";
import Layout13 from "../src/pages/Layout13/Layout13";
import Login from "../src/component/Login";
import Signup from "../src/component/Signup";
import PasswordForgot from "../src/component/PasswordForgot";


const routes = [
  { path: "/Layout2", component: Layout2 },
  { path: "/Layout3", component: Layout3 },
  { path: "/Layout4", component: Layout4 },
  { path: "/Layout5", component: Layout5 },
  { path: "/Layout6", component: Layout6 },
  { path: "/Layout7", component: Layout7 },
  { path: "/Layout8", component: Layout8 },
  { path: "/Layout9", component: Layout9 },
  { path: "/Layout10", component: Layout10 },
  { path: "/Layout11", component: Layout11 },
  { path: "/Layout12", component: Layout12 },
  { path: "/Layout13", component: Layout13 },
  { path: "/Login", component: Login },
  { path: "/Signup", component: Signup },
  { path: "/PasswordForgot", component: PasswordForgot },
  { path: "/", component: Layout1 },
];

export default routes;