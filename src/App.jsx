import "./App.css"
import Anime from "./components/Anime";
import Intro from "./components/Intro";
import NavigationBar from "./components/NavigationBar";
import Trending from "./components/Trending"

import "./style/Landingpage.css" 


function App() {
  return (
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
  );
}

export default App;
