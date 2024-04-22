"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import toast from "react-hot-toast";
import { io } from "socket.io-client";

import { Dialog } from "@/_components";
import Link from "next/link";

const serverURL = "http://localhost:3001";

// const socket = io(serverURL, { autoConnect: false });
const IndexPage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [roomId, setRoomId] = useState("");
  const [joinedRoomId, setJoinedRoomId] = useState("");
  const [userIds, setUserIds] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
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

  console.log([roomId, joinedRoomId]);
  const handleJoinRoom = () => {
    socket.emit("joinRoom", roomId);
  };

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

  return (
    <div className=" prose flex max-w-screen-lg items-center justify-center">
      <div className="flex flex-col">
        <h1 className="header">
          A personal poker room has been assigned to you.
        </h1>
        <div className="flex flex-col items-center justify-center  space-x-2">
          <div className="flex flex-row space-x-5">
            <input
              type="text"
              placeholder="Enter Room Number"
              className="input input-bordered input-accent w-full max-w-xs"
              ref={inputRef}
              onChange={(e) => setRoomId(e.target.value)}
            />
            <button
              className="btn btn-primary"
              // onClick={() => socket.emit("joinRoom", roomId)}
              onClick={() => router.push("joinRoom")}
            >
              Join Room
            </button>
          </div>
          <div className="divider">OR</div>
          <button
            className="btn btn-secondary"
            // onClick={() => socket.emit("userConnected")}
            onClick={() => router.push("createRoom")}
          >
            Create Room
          </button>
        </div>
        <ul className="list-none">
          {userIds.map((id) => (
            <li key={id} className="list-item">
              {id}
            </li>
          ))}
        </ul>
      </div>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default IndexPage;
