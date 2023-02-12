import "./App.css";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Home from "./Pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CreatePost from "./Pages/CreatePost";

function App() {
  return (
    <Router>
      <Topbar />
      <Sidebar />
      <div className="md:pl-20 lg:pl-64 w-full flex justify-center ">
        <div className="pt-16 md:pt-0 flex flex-col max-w-2xl w-full h-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/createpost" element={<CreatePost />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
