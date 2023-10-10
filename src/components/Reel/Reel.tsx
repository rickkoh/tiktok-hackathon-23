import ReelOverlay from "./ReelOverlay";
import { ReelType } from "@/types";

const LoadingPlaceholder = require("../../../public/loading_placeholder.png");

export interface ReelProps {
  reel: ReelType;
}

function Reel(props: ReelProps) {
  return (
    <div className={"flex h-[100dvh] w-full relative bg-black snap-center"}>
      <video
        loop
        autoPlay
        muted
        playsInline
        className="w-full h-full"
        placeholder={LoadingPlaceholder}
      >
        <source src={props.reel.videoUrl} type="video/mp4" />
      </video>
      <ReelOverlay reel={props.reel} />
    </div>
  );
}

export default Reel;
