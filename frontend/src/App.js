import './App.css';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home'
import Stories from './components/Stories';
import {} from 'react-icons/ai'
import {} from 'react-icons/bs'
import {} from 'react-icons/go'
import {} from 'react-icons/cg'
import {} from 'react-icons/di'
import {} from 'react-icons/fa'
import {} from 'react-icons/ci'
import {} from 'react-icons/fc'
import {} from 'react-icons/fi'
import {} from 'react-icons/gi'
import {} from 'react-icons/gr'
import {} from 'react-icons/hi'
import {} from 'react-icons/hi2'
import {} from 'react-icons/im'
import {} from 'react-icons/io'
import {} from 'react-icons/io5'

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
