import "./app.css"
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import Profile from "./components/content/Profile";
import Messages from "./components/pages/messages/Messages";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/pages/news/News";
import Settings from "./components/pages/setting/Settings";
import Music from "./components/pages/music/Music";


function App() {
  return (   <BrowserRouter>
          <div className="main__container">
                <div className="App">
                    <div className="wrapper">
                        <Header/>
                        <Nav/>
                            <Routes>
                                 <Route path="/" element={<Profile />} />
                                 <Route path="/messages/*" element={<Messages />} />
                                <Route path="/news" element={<news />} />
                                <Route path="/music" element={<Music />} />
                                <Route path="/setting" element={<Settings />} />
                            </Routes>
                    </div>
                </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
