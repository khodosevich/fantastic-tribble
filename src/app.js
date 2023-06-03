import "./app.css"
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import Profile from "./components/pages/profile/Profile";
import Messages from "./components/pages/messages/Messages";
import { Route, Routes} from "react-router-dom";
import Settings from "./components/pages/setting/Settings";
import Music from "./components/pages/music/Music";
import News from "./components/pages/news/News";

function App(props) {

  return (
          <div className="main__container">
                <div className="App">
                    <div className="wrapper">
                        <Header/>
                        <Nav state={props.state} />
                            <Routes>
                                 <Route path="/" element={ <Profile state={props.state.profileReducer.profilePage} dispatch={props.dispatch} />} />
                                 <Route path="/messages/*" element={<Messages state={props.state.dialogsReducer.dialogsPage} dispatch={props.dispatch}/>} />
                                <Route path="/news" element={<News />} />
                                <Route path="/music" element={<Music />} />
                                <Route path="/setting" element={<Settings />} />
                            </Routes>
                    </div>
                </div>
          </div>
  );
}

export default App;
