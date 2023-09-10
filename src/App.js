
import './App.css';
import Topnavbar from './topNavBar.js';
import Maincontent from './mainContentPage.js';
import LiveMusic from './musicBar.js';
import LoginPage from './login.js';
import Queue from './queuePage/queue';
function App() {
  return (
    <div className="app">
      <Topnavbar/>
      <Maincontent/>
      {/* <Queue/> */}
      <LiveMusic/>
      {/* <LoginPage/> */}
    </div>
  );
}

export default App;
