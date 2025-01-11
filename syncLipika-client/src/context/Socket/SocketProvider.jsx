import { createContext, useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

// Create a context for the socket
const SocketContext = createContext(null);

// Define the provider
export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Initialize the socket connection
    const newSocket = io('http://localhost:5000', {
      transports: ['websocket'], // Use WebSocket for a better experience
    });

    setSocket(newSocket);

    // Cleanup the connection when the component unmounts
    return () => {
      newSocket.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};

// Custom hook to use the socket
export const useSocket = () => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error('useSocket must be used within a SocketProvider');
  }
  return context;
};
