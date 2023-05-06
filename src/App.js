import "./App.css"
import Nav from "./Components/Nav/Nav";
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Messages from "./Components/Pages/Messages/Messages";


function App() {
  return (
    <div className="App">
        <div className="wrapper">
            <Header/>
            <Nav/>
            <Messages/>
        </div>
    </div>
  );
}

export default App;
