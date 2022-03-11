import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Login from "components/Login";
import Header from "components/Header";
import Home from "components/Home";
import Detail from "components/Detail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/detail/:id" exact element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
