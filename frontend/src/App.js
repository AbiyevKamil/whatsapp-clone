import { useEffect, useState } from 'react';
import './App.css';
import Chat from './chat/Chat.jsx';
import Sidebar from './sidebar/Sidebar.jsx';
import Pusher from 'pusher-js'
import axios from './axios'
import Login from './Login/Login'
import { useStateValue } from "./redux/StateProvider";

function App() {
  const [messages, setMessages] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    axios.get('/messages/sync')
      .then(response => {
        setMessages(response.data)
      })
  }, [])

  useEffect(() => {
    const pusher = new Pusher('cb778a3635347bfb619e', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('message');
    channel.bind('inserted', function (newMessage) {
      setMessages([...messages, newMessage])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };

  }, [messages])

  return (
    <div className="app">
      {!user ? <Login /> :
        <div className="app__body">
          <Sidebar />
          <Chat messages={messages} />
        </div>
      }
    </div>
  );
}

export default App;
