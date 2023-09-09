"use client";
import TikTokCreateButton from "@/icons/TikTokCreateButton";
import TikTokDiscoverButtonOutline from "@/icons/TikTokDiscoverButtonOutline";
import TikTokHomeButtonOutline from "@/icons/TikTokHomeButtonOutline";
import TikTokInboxButtonOutline from "@/icons/TikTokInboxButtonOutline";
import TikTokProfileButtonOutline from "@/icons/TikTokProfileButtonOutline";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

function BottomNavbar() {
  const pathname = usePathname();
  const router = useRouter();

  const navItems: { name: string; icon: string; path: string }[] = [
    {
      name: "Home",
      icon: "/home_icon",
      path: "/",
    },
    {
      name: "Shop",
      icon: "/shop_icon",
      path: "/shop",
    },
    {
      name: "",
      icon: "/create_button",
      path: "/nil",
    },
    {
      name: "Inbox",
      icon: "/inbox_icon",
      path: "/nil",
    },
    {
      name: "Profile",
      icon: "/profile_icon",
      path: "/profile",
    },
  ];

  //   TODO navigate function

  return (
    <nav className="flex flex-row w-full h-20 fixed bottom-0 justify-evenly items-center bg-primary pt-1.5 pb-5 text-secondary">
      <button>
        <TikTokHomeButtonOutline />
      </button>
      <button>
        <TikTokDiscoverButtonOutline />
      </button>
      <button onClick={() => router.push("/add-reel")}>
        <TikTokCreateButton />
      </button>
      <button>
        <TikTokInboxButtonOutline />
      </button>
      <button>
        <TikTokProfileButtonOutline />
      </button>
    </nav>
  );
}

export default BottomNavbar;
