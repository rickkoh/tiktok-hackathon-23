import ReelOverlay from "./ReelOverlay";
import { ReelType } from "@/types";

const LoadingPlaceholder = require("../../../public/loading_placeholder.png");

export interface ReelProps {
  reel: ReelType;
}

function Reel(props: ReelProps) {
  return (
    <div className={"flex h-screen w-full relative bg-black"}>
      <div className="absolute top-0 left-0 w-full h-full" />
      <video
        loop
        autoPlay
        muted
        playsInline
        className="h-full"
        placeholder={LoadingPlaceholder}
      >
        <source src={props.reel.videoUrl} type="video/mp4" />
      </video>
      <ReelOverlay reel={props.reel} />
    </div>
  );
}

export default Reel;
