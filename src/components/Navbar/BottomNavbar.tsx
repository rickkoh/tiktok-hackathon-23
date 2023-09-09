"use client";
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
      <Image src="/home_icon.png" alt="" width={30} height={30} />
      <Image src="/shop_icon.png" alt="" width={30} height={30} />
      <button onClick={() => router.push("/add-reel")}>
        <Image src="/create_button.png" alt="" width={30} height={30} />
      </button>
      <Image src="/inbox_icon.png" alt="" width={30} height={30} />
      <Image src="/profile_icon.png" alt="" width={30} height={30} />
    </nav>
  );
}

export default BottomNavbar;
