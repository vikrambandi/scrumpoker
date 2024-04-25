"use client";

import { Button, Input, Typography } from "@material-tailwind/react";
import { useState } from "react";

const JoinRoom = () => {
  const [name, setName] = useState("");
  const [roomNo, setRoomNo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, like sending data to a server
    console.log("Name:", name);
    console.log("roomNo:", roomNo);
  };

  return (
    <div className="flex flex-col">
      <form
        onSubmit={handleSubmit}
        className="flex min-w-[24rem] flex-col gap-6"
      >
        <div className="mb-1 flex flex-col gap-2">
          <Typography variant="h6" color="blue-gray">
            Username
          </Typography>
          <Input
            size="lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Typography variant="h6" color="blue-gray">
            Room No
          </Typography>
          <Input
            size="lg"
            placeholder="123-456-789"
            value={roomNo}
            onChange={(e) => setRoomNo(e.target.value)}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Button size="lg">Join Room</Button>
      </form>
    </div>
  );
};

export default JoinRoom;
