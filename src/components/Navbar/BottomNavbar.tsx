import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

function BottomNavbar() {
  const pathname = usePathname();

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
    <nav className="fixed bottom-0 left-0 right-0 items-center flex justify-around bg-primary pt-1.5 pb-5 text-secondary">
      {navItems.map((item) => {
        const isActive: boolean = pathname.startsWith(item.path);

        return (
          <div className="flex flex-col justify-center items-center">
            <Image
              src={(isActive ? item.icon + "_sel" : item.icon) + ".png"}
              alt={"Live Icon"}
              width={item.name == "Shop" ? 23 : 30}
              height={10}
            />
            <small
              className={
                item.name == "Shop" ? "text-xs relative top-1" : "text-xs"
              }
            >
              {item.name}
            </small>
          </div>
        );
      })}
    </nav>
  );
}

export default BottomNavbar;
