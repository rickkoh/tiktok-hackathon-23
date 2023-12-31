"use client";
import BottomNavbar from "@/components/Navbar/BottomNavbar";
import TopNavbar from "@/components/Navbar/TopNavbar";
import Reel from "@/components/Reel/Reel";
import { Database, ReelType, Tables } from "@/types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const supabase = createClientComponentClient<Database>();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [reels, setReels] = useState<ReelType[]>([]);

  const getReelsData = useCallback(async () => {
    setIsLoading(true);

    const { data, error } = await supabase
      .from("reels")
      .select("*, blogs(*, user_profiles(*)), user_profiles(*)")
      .order("created_at", { ascending: true });

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
      <Head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="TikBlog" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </Head>
      {/* Header */}
      <TopNavbar />
      <div className="flex flex-col h-[100dvh] overflow-scroll snap-y snap-mandatory">
        {reels.map((reel, i) => (
          <Reel key={reel.id} reel={reel} />
        ))}
      </div>
      <div className="h-[72px]"></div>
      <BottomNavbar />
    </main>
  );
}
