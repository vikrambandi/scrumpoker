"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import toast from "react-hot-toast";
import { io } from "socket.io-client";

import Link from "next/link";
import { Button } from "@material-tailwind/react";

const serverURL = "http://localhost:3001";

// const socket = io(serverURL, { autoConnect: false });
const IndexPage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  // const [roomId, setRoomId] = useState("");
  // const [joinedRoomId, setJoinedRoomId] = useState("");
  // const [userIds, setUserIds] = useState<string[]>([]);
  // const [isOpen, setIsOpen] = useState(false);
  // const socket = useMemo(
  //   () =>
  //     io(serverURL, {
  //       autoConnect: false,
  //       // reconnection: true,
  //       // reconnectionAttempts: 10,
  //       // reconnectionDelay: 1000,
  //       // reconnectionDelayMax: 5000,
  //     }),
  //   [],
  // );

  // console.log([roomId, joinedRoomId]);
  // const handleJoinRoom = () => {
  //   socket.emit("joinRoom", roomId);
  // };

  // const socketInitializer = useCallback(async () => {
  //   socket.connect();

  //   socket.on("userConnected", (id) => {
  //     console.log("connected");
  //     toast(` User Connected ${id}`);
  //   });

  //   socket.on("joinRoom", (roomId: string) => {
  //     console.log("joinedRoom");
  //     toast(" User joined room");
  //     setJoinedRoomId(roomId);
  //   });

  //   socket.on("usersList", (userIds: string[] = []) => {
  //     setUserIds(userIds);
  //   });

  //   socket.on("destroy", () => {
  //     console.log("destroy");
  //     setJoinedRoomId("");
  //   });

  //   socket.on("connect_error", (err) => {
  //     console.log(`connect_error due to ${err.message}`);
  //   });
  // }, [socket]);

  // useEffect(() => {
  //   socketInitializer() as unknown as void;
  //   return () => {
  //     socket.off("userConnected");
  //     socket.off("joinRoom");
  //     socket.off("usersList");
  //     socket.off("destroy");
  //     socket.off("connect_error");
  //     socket.disconnect();
  //   };
  // }, [socket, socketInitializer]);

  return (
    <div className=" flex flex-col gap-2">
      <Button color="blue" onClick={() => router.push("joinRoom")}>Join Room</Button>
      <Button color="green" onClick={() => router.push("createRoom")}>Create Room</Button>
    </div>
  );
};

export default IndexPage;
