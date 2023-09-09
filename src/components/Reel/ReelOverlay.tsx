import Image from "next/image";
import { useRef } from "react";
import Blog, { BlogRef } from "../Blog/Blog";
import { ReelType, Tables } from "@/types";

export interface ReelOverlayProps {
  reel: ReelType;
}

function ReelOverlay(props: ReelOverlayProps) {
  const blogRef = useRef<BlogRef>(null);
  return (
    <>
      <div className="absolute bottom-20 left-0 right-0 flex justify-end text-secondary p-3">
        <section className="grow self-end">
          <h2 className="text-lg font-semibold mb-2">
            {props.reel.user_profiles.name}
          </h2>
          <p>{props.reel.caption}</p>
        </section>
        <aside className="flex flex-col gap-y-6">
          <button
            onClick={() => {
              if (blogRef.current) {
                blogRef.current.open();
              }
            }}
            className="animate-pulse"
          >
            <Image
              src="/blog_icon.png"
              width={27}
              height={27}
              alt="Blog icon"
            />
          </button>
          <div>
            <Image
              src="/like_icon.png"
              width={27}
              height={27}
              alt="Like icon"
            />
            <small className="text-sm">
              {Math.floor(Math.random() * (5000 - 1 + 1)) + 1}
            </small>
          </div>
          <Image
            src="/comment_icon.png"
            width={27}
            height={27}
            alt="Comment icon"
          />
          <Image
            src="/share_icon.png"
            width={27}
            height={27}
            alt="Share icon"
          />
        </aside>
      </div>
      <Blog ref={blogRef} />
    </>
  );
}

export default ReelOverlay;
