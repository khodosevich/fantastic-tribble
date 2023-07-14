import "./app.css"
import Nav from "./components/nav/Nav";
import Messages from "./components/pages/messages/Messages";
import { Route, Routes} from "react-router-dom";
import Settings from "./components/pages/setting/Settings";
import Music from "./components/pages/music/Music";
import News from "./components/pages/news/News";
import FindFriends from "./components/pages/findFriends/FindFriends";
import {Box} from "@mui/material";
import ProfileContainer from "./components/pages/profile/ProfileContainer";
import Login from "./components/login/Login";
import HeaderContainer from "./components/header/HeaderContainer";

function App(props) {

  return (<>
           <Box className="main__container">
                  <Box className="App">
                      <Box className="wrapper">
                          <HeaderContainer/>
                          <Nav state={props.state} />
                          <Routes>
                              <Route path="/profile/*" element={ <ProfileContainer state={props.state.profileReducer.profilePage} dispatch={props.dispatch} />} />
                              <Route path="/messages/*" element={<Messages state={props.state.dialogsReducer.dialogsPage} dispatch={props.dispatch}/>} />
                              <Route path="/news" element={<News />} />
                              <Route path="/music" element={<Music />} />
                              <Route path="/setting" element={<Settings />} />
                              <Route path="/findfriends" element={<FindFriends state={props.state.findFriendReducer} dispatch={props.dispatch}/>} />
                              <Route path="/login" element={<Login/>} />

                          </Routes>
                      </Box>
                  </Box>
              </Box>
  </>

  );
}

export default App;
