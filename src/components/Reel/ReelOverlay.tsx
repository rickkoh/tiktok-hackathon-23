import Image from "next/image";
import { useRef } from "react";
import Blog, { BlogRef } from "../Blog/Blog";

function ReelOverlay() {
  const blogRef = useRef<BlogRef>(null);
  return (
    <>
      <Blog ref={blogRef} />
      <div className="absolute bottom-0 left-0 right-0 flex justify-end text-secondary p-3">
        <section className="grow self-end">
          <h2 className="text-lg font-semibold mb-2">ddania2855</h2>
          <p>Caption Test</p>
        </section>
        <aside className="flex flex-col gap-y-6">
          <Image
            src="/blog_icon.png"
            width={27}
            height={27}
            alt="Blog icon"
            onClick={() => {
              if (blogRef.current) {
                blogRef.current.open();
              }
            }}
          />
          <div>
            <Image
              src="/like_icon.png"
              width={27}
              height={27}
              alt="Like icon"
            />
            <small className="text-sm">200</small>
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
    </>
  );
}

export default ReelOverlay;
