"use client";
import Stars from "@/components/Product/Stars";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { PiShareFat, PiShoppingCart, PiDotsThreeBold } from "react-icons/pi";
import { BsShopWindow } from "react-icons/bs";
import { TbBrandHipchat } from "react-icons/tb";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <main className="relative w-full h-[100dvh] flex flex-col bg-gray-100">
      <nav className="w-full h-fit bg-white mb-1 flex flex-col pb-2">
        <div className="flex flex-row w-full h-12 px-2 py-2 bg-white justify-between items-center">
          <button onClick={() => router.push("/")}>
            <IoIosArrowBack className="w-6 h-6" />
          </button>
          <div className="flex flex-row gap-4">
            <button>
              <PiShareFat className="w-6 h-6" />
            </button>
            <button>
              <PiShoppingCart className="w-6 h-6" />
            </button>
            <button>
              <PiDotsThreeBold className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="w-full h-full flex flex-row items-end overflow-scroll gap-2 border-b-2 border-gray-300 text-gray-500">
          <button className="px-3 py-1">Overview</button>
          <button className="px-3 py-1 text-black font-semibold border-b border-black">
            Reviews
          </button>
          <button className="px-3 py-1">Description</button>
          <button className="px-3 py-1">Recommendation</button>
        </div>
      </nav>
      <div className="flex flex-col w-full h-full overflow-scroll bg-white p-3 gap-4">
        <h1 className="font-semibold">Customer reviews (4)</h1>
        <div className="flex flex-col gap-1 mb-6">
          <div className="flex flex-row items-center gap-2">
            <Image
              src="/public_profile.png"
              height={24}
              width={24}
              alt=""
              className="rounded-full aspect-square"
            />
            <h1>User{Math.random().toString().slice(-8)}</h1>
          </div>
          <Stars rating={5} />
          <p className="text-gray-500">Item: default</p>
          <div className="flex flex-col gap-2 border border-gray-300 p-2 py-4 pb-6">
            <h1 className="font-semibold text-lg">Top 3 Rubber Duckes</h1>
            <div className="flex flex-row gap-2 text-sm">
              <button onClick={() => router.push("/")}>
                <div className="flex items-center justify-center border border-red-500 bg-red-500 text-white px-3 py-1">
                  View Reel
                </div>
              </button>
              <button onClick={() => router.push("/")}>
                <div className="flex items-center justify-center border border-red-500 bg-red-500 text-white px-3 py-1">
                  View Blog
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 mb-6">
          <div className="flex flex-row items-center gap-2">
            <Image
              src="/public_profile.png"
              height={24}
              width={24}
              alt=""
              className="rounded-full aspect-square"
            />
            <h1>User{Math.random().toString().slice(-8)}</h1>
          </div>
          <Stars rating={5} />
          <p className="text-gray-500">Item: default</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus lorem odio, nec pulvinar elit vestibulum ut.
          </p>
          <div className="flex flex-row gap-2">
            <Image
              src="/public_profile.png"
              height={84}
              width={84}
              alt=""
              objectFit="cover"
              className="aspect-square"
            />
            <Image
              src="/public_profile.png"
              height={84}
              width={84}
              alt=""
              objectFit="cover"
              className="aspect-square"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1 mb-6">
          <div className="flex flex-row items-center gap-2">
            <Image
              src="/public_profile.png"
              height={24}
              width={24}
              alt=""
              className="rounded-full aspect-square"
            />
            <h1>User{Math.random().toString().slice(-8)}</h1>
          </div>
          <Stars rating={5} />
          <p className="text-gray-500">Item: default</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus lorem odio, nec pulvinar elit vestibulum ut.
          </p>
          <div className="flex flex-row gap-2">
            <Image
              src="/public_profile.png"
              height={84}
              width={84}
              alt=""
              objectFit="cover"
              className="aspect-square"
            />
            <Image
              src="/public_profile.png"
              height={84}
              width={84}
              alt=""
              objectFit="cover"
              className="aspect-square"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1 mb-6">
          <div className="flex flex-row items-center gap-2">
            <Image
              src="/public_profile.png"
              height={24}
              width={24}
              alt=""
              className="rounded-full aspect-square"
            />
            <h1>User{Math.random().toString().slice(-8)}</h1>
          </div>
          <Stars rating={5} />
          <p className="text-gray-500">Item: default</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus lorem odio, nec pulvinar elit vestibulum ut.
          </p>
          <div className="flex flex-row gap-2">
            <Image
              src="/public_profile.png"
              height={84}
              width={84}
              alt=""
              objectFit="cover"
              className="aspect-square"
            />
            <Image
              src="/public_profile.png"
              height={84}
              width={84}
              alt=""
              objectFit="cover"
              className="aspect-square"
            />
          </div>
        </div>
      </div>
      <nav className="w-full h-fit flex flex-col gap-2 bg-white px-4 py-2">
        <div className="flex flex-row justify-between text-gray-500">
          <h1>Select options</h1>
          <p>Default</p>
        </div>
        <div className="w-full flex flex-row items-center gap-3 pb-4">
          <button>
            <BsShopWindow className="w-6 h-6" />
            <p className="text-xs">Shop</p>
          </button>
          <button>
            <TbBrandHipchat className="w-6 h-6" />
            <p className="text-xs">Chat</p>
          </button>
          <button className="w-full">
            <div className="flex items-center justify-center border border-red-500 text-red-500 px-3 py-2">
              Add to cart
            </div>
          </button>
          <button className="w-full">
            <div className="flex items-center justify-center border border-red-500 bg-red-500 text-white px-3 py-2">
              Buy now
            </div>
          </button>
        </div>
      </nav>
    </main>
  );
}
