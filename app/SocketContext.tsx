import React, {
  createContext,
  useMemo,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";
import io from "socket.io-client";
import toast from "react-hot-toast";
import { Socket } from "socket.io";

const serverURL = "http://localhost:3001";

const SocketContext = createContext<null | Socket>(null);

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  const [roomId, setRoomId] = useState("");
  const [joinedRoomId, setJoinedRoomId] = useState("");
  const [userIds, setUserIds] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // const [socket, setSocket] = useState(null);
  const socket = useMemo(
    () =>
      io(serverURL, {
        autoConnect: false,
        // reconnection: true,
        // reconnectionAttempts: 10,
        // reconnectionDelay: 1000,
        // reconnectionDelayMax: 5000,
      }),
    [],
  );

  const socketInitializer = useCallback(async () => {
    socket.connect();

    socket.on("userConnected", (id) => {
      console.log("connected");
      toast(` User Connected ${id}`);
    });

    socket.on("joinRoom", (roomId: string) => {
      console.log("joinedRoom");
      toast(" User joined room");
      setJoinedRoomId(roomId);
    });

    socket.on("usersList", (userIds: string[] = []) => {
      setUserIds(userIds);
    });

    socket.on("destroy", () => {
      console.log("destroy");
      setJoinedRoomId("");
    });

    socket.on("connect_error", (err) => {
      console.log(`connect_error due to ${err.message}`);
    });
  }, [socket]);

  useEffect(() => {
    socketInitializer() as unknown as void;
    return () => {
      socket.off("userConnected");
      socket.off("joinRoom");
      socket.off("usersList");
      socket.off("destroy");
      socket.off("connect_error");
      socket.disconnect();
    };
  }, [socket, socketInitializer]);

  // useEffect(() => {
  //   const newSocket = io("http://localhost:5000"); // Replace with your server URL
  //   setSocket(newSocket);
  //   return () => newSocket.close();
  // }, []);

  return (
    // @ts-ignore
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

const useSocketContext = () => useContext(SocketContext);

export default SocketContext;
