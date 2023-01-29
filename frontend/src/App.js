import './App.css';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home'
import Stories from './components/Stories';

function App() {
  return (
    <>
      <Topbar />
      <Sidebar />
      <div className='md:pl-20 lg:pl-64'>
        <Home />
      </div>
    </>

  );
}

export default App;
