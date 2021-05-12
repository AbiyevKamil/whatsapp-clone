import './App.css';
import Chat from './chat/Chat.jsx';
import Sidebar from './sidebar/Sidebar.jsx';

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
