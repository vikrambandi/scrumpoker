"use client";

import { useState } from "react";

const CreateRoom = () => {
  const [name, setName] = useState("");
  const [roomNo, setRoomNo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, like sending data to a server
    console.log("Name:", name);
    console.log("roomNo:", roomNo);
  };
  return (
    <div className="m-2 flex flex-col gap-2">
      <form onSubmit={handleSubmit} className="min-w-[24rem]">
        <div className="mb-2">
          <label className="label font-semibold">Username</label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="label font-semibold">Room No</label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="123-456-789"
            value={roomNo}
            onChange={(e) => setRoomNo(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-primary w-full">Create Room</button>
      </form>

    </div>
  );
};

export default CreateRoom;
