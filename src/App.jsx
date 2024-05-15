import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import {Routes,Route} from "react-router-dom"
import "./styles/style.scss"
import SerchBar from "./pages/SearchBar/SerchBar";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Layout/>}>
        <Route path={"/home"} element={<Home/>}/>
        <Route path={"/serchbar"} element={<SerchBar/>}/>
      </Route>
    </Routes>
  );
}

export default App;
