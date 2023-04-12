import {BrowserRouter, Route, Routes} from "react-router-dom";

import MainPage from "./page/MainPage";
import Case from "./page/Case";
import Introduction from "./page/Introduction";
import "./global.css"
const App = () =>{
    return(
        <BrowserRouter>
        <MyRoute />
        </BrowserRouter>
    )
}

/**
 * react-route-dom version : V6
 * @returns 
 */
function MyRoute(){
    return(
        <Routes >
            <Route path="/" exact element={<MainPage/>} />
            <Route path="/introduction"  exact element={<Introduction/>} />
            <Route path="/case" exact element={<Case/>} />
        </Routes>
    )
  }

export default App;