import { useEffect } from 'react';
import './App.css';
import Chat from './chat/Chat.jsx';
import Sidebar from './sidebar/Sidebar.jsx';
import Pusher from 'pusher-js'

function App() {

  useEffect(() => {
    const pusher = new Pusher('cb778a3635347bfb619e', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
      alert(JSON.stringify(data));
    });
  }, [])

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
