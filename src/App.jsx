import "./App.css"
import Anime from "./components/Anime";
import Intro from "./components/Intro";
import NavigationBar from "./components/NavigationBar";
import Trending from "./components/Trending"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./style/Landingpage.css" 
import FilmPremium from "./Page/FilmPremium";

function App() {
  return (
    <BrowserRouter>
          <div>
      <div className="myBG">
        <NavigationBar/>
        <Intro/>
      </div>
      <div className="trending">
        <Trending />
      </div>
      <div className="anime">
        <Anime/>
      </div>        
    </div>

    <Routes>
      <Route path="/FilmPremium" element={<FilmPremium/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
