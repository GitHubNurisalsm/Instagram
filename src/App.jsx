import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import {Routes,Route} from "react-router-dom"
import "./styles/style.scss"

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Layout/>}>
        <Route path={"/"} element={<Home/>}/>
      </Route>
    </Routes>
  );
}

export default App;
