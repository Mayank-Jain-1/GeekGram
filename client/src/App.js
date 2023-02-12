import './App.css';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import Home from './Pages/Home'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import CreatePost from './Pages/CreatePost';

function App() {
  return (
    <Router>
      <Routes>

      <Route exact path="/" component={<Home/>} />
      <Route exact path="/createpost" component={<CreatePost/>} />
      </Routes>
      {/* <Topbar /> */}
      {/* <Sidebar /> */}
      {/* <div className='md:pl-20 lg:pl-64'>
        <Home />
      </div> */}
    </Router>

  );
}

export default App;
