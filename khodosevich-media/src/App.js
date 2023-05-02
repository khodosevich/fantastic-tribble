import "./App.css"
import Nav from "./Components/Nav/Nav";
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";


function App() {
  return (
    <div className="App">
        <div className="wrapper">
            <Header/>
            <Nav/>
            <Content/>
        </div>
    </div>
  );
}

export default App;
