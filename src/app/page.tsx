"use client";
import BottomNavbar from "@/components/Navbar/BottomNavbar";
import TopNavbar from "@/components/Navbar/TopNavbar";
import Reel from "@/components/Reel/Reel";
import { Database, ReelType, Tables } from "@/types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useCallback, useEffect, useRef, useState } from "react";
import useScrollSnap from "react-use-scroll-snap";

export default function Home() {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 5 });
  const supabase = createClientComponentClient<Database>();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [reels, setReels] = useState<ReelType[]>([]);

  const getReelsData = useCallback(async () => {
    setIsLoading(true);

    const { data, error } = await supabase
      .from("reels")
      .select("*, blogs(*, user_profiles(*)), user_profiles(*)");

    if (error) {
      console.error(error);
      return;
    }

    const typedData = data as ReelType[];

    //get the video urls

    typedData.forEach((reel) => {
      const url = supabase.storage.from("reels").getPublicUrl(reel.video_id);
      reel.videoUrl = url.data.publicUrl;
    });

    setReels(typedData);
    setIsLoading(false);
    // wait for promises
  }, [supabase]);

  useEffect(() => {
    getReelsData();
  }, []);

  return (
    <main className="flex flex-col">
      {/* Header */}
      <TopNavbar />
      <div ref={scrollRef}>
        {reels.map((reel, i) => (
          <Reel key={i} reel={reel} />
        ))}
        {/* <Reel />
        <Reel color="bg-red-400" /> */}
      </div>
      <div className="h-[72px]"></div>
      <BottomNavbar />
    </main>
  );
}
