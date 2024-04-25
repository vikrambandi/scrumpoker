"use client";

import { useRouter } from "next/navigation";

import { Button } from "@material-tailwind/react";


const IndexPage = () => {
  const router = useRouter();

  return (
    <div className=" flex flex-col gap-2">
      <Button color="blue" onClick={() => router.push("joinRoom")}>Join Room</Button>
      <Button color="green" onClick={() => router.push("createRoom")}>Create Room</Button>
    </div>
  );
};

export default IndexPage;
