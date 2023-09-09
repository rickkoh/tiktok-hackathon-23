import { useRef } from "react";
import Blog, { BlogRef } from "../Blog/Blog";
import ReelOverlay, { ReelOverlayProps } from "./ReelOverlay";
import { ReelType, Tables } from "@/types";

export interface ReelProps {
  reel: ReelType;
}

function Reel(props: ReelProps) {
  return (
    <div className={"h-[calc(100vh-72px)] w-screen relative bg-black"}>
      <video loop autoPlay muted playsInline className="h-full">
        <source src={props.reel.videoUrl} type="video/mp4" />
      </video>
      <ReelOverlay reel={props.reel} />
    </div>
  );
}

export default Reel;
