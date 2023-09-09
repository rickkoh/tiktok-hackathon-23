import { useRef } from "react";
import Blog, { BlogRef } from "../Blog/Blog";
import ReelOverlay from "./ReelOverlay";

export interface ReelProps {
  color: string;
}

function Reel(props: ReelProps) {
  return (
    <div className={"h-[calc(100vh-72px)] w-screen relative bg-black"}>
      <video loop autoPlay muted className="h-full">
        <source
          src="/15b976eb-e2df-434a-b74e-07af4de1eb27.mp4"
          type="video/mp4"
        />
      </video>
      <ReelOverlay />
    </div>
  );
}

export default Reel;
