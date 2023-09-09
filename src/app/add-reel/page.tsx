"use client";
import Image from "next/image";
import { IoTextSharp } from "react-icons/io5";
import { RiEmojiStickerFill } from "react-icons/ri";
import { TbColorFilter } from "react-icons/tb";
import { HiDownload } from "react-icons/hi";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineCheck } from "react-icons/ai";
import { useRouter } from "next/navigation";
import Head from "next/head";

export default function Page() {
  const router = useRouter();

  return (
    <div className="relative flex flex-col gap-8 w-full h-[100dvh] justify-center bg-black">
      <Head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="TikBlog" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </Head>
      <Image
        src="/reel_placeholder.jpg"
        alt=""
        width={100}
        height={100}
        className="rounded-lg w-full h-2/3"
      />
      <div className="fixed top-[10%] right-0 flex flex-col gap-4 px-2 text-white items-center">
        <Image
          src="/dp.jpeg"
          width={64}
          height={64}
          alt=""
          className="w-8 h-8 rounded-full aspect-square animate-spin-slow"
        />
        <button>
          <IoTextSharp className="w-6 h-6" />
        </button>
        <button>
          <RiEmojiStickerFill className="w-6 h-6" />
        </button>
        <button>
          <TbColorFilter className="w-6 h-6" />
        </button>
        <button>
          <HiDownload className="w-6 h-6" />
        </button>
        <button onClick={() => router.push("/new")} className="animate-pulse">
          <svg
            width="24"
            height="18"
            viewBox="0 0 24 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3 0C2.20435 0 1.44129 0.31607 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3L0 15C0 15.7956 0.316071 16.5587 0.87868 17.1213C1.44129 17.6839 2.20435 18 3 18H21C21.7956 18 22.5587 17.6839 23.1213 17.1213C23.6839 16.5587 24 15.7956 24 15V3C24 2.20435 23.6839 1.44129 23.1213 0.87868C22.5587 0.31607 21.7956 0 21 0H3ZM1.5 3C1.5 2.60218 1.65804 2.22064 1.93934 1.93934C2.22064 1.65804 2.60218 1.5 3 1.5H21C21.3978 1.5 21.7794 1.65804 22.0607 1.93934C22.342 2.22064 22.5 2.60218 22.5 3V15C22.5 15.3978 22.342 15.7794 22.0607 16.0607C21.7794 16.342 21.3978 16.5 21 16.5H3C2.60218 16.5 2.22064 16.342 1.93934 16.0607C1.65804 15.7794 1.5 15.3978 1.5 15V3ZM12.75 3.75C12.75 3.55109 12.671 3.36032 12.5303 3.21967C12.3897 3.07902 12.1989 3 12 3C11.8011 3 11.6103 3.07902 11.4697 3.21967C11.329 3.36032 11.25 3.55109 11.25 3.75V14.25C11.25 14.4489 11.329 14.6397 11.4697 14.7803C11.6103 14.921 11.8011 15 12 15C12.1989 15 12.3897 14.921 12.5303 14.7803C12.671 14.6397 12.75 14.4489 12.75 14.25V3.75ZM3 5.25C3 5.05109 3.07902 4.86032 3.21967 4.71967C3.36032 4.57902 3.55109 4.5 3.75 4.5H9C9.19891 4.5 9.38968 4.57902 9.53033 4.71967C9.67098 4.86032 9.75 5.05109 9.75 5.25C9.75 5.44891 9.67098 5.63968 9.53033 5.78033C9.38968 5.92098 9.19891 6 9 6H3.75C3.55109 6 3.36032 5.92098 3.21967 5.78033C3.07902 5.63968 3 5.44891 3 5.25ZM3 8.25C3 8.05109 3.07902 7.86032 3.21967 7.71967C3.36032 7.57902 3.55109 7.5 3.75 7.5H9C9.19891 7.5 9.38968 7.57902 9.53033 7.71967C9.67098 7.86032 9.75 8.05109 9.75 8.25C9.75 8.44891 9.67098 8.63968 9.53033 8.78033C9.38968 8.92098 9.19891 9 9 9H3.75C3.55109 9 3.36032 8.92098 3.21967 8.78033C3.07902 8.63968 3 8.44891 3 8.25ZM3 11.25C3 11.0511 3.07902 10.8603 3.21967 10.7197C3.36032 10.579 3.55109 10.5 3.75 10.5H9C9.19891 10.5 9.38968 10.579 9.53033 10.7197C9.67098 10.8603 9.75 11.0511 9.75 11.25C9.75 11.4489 9.67098 11.6397 9.53033 11.7803C9.38968 11.921 9.19891 12 9 12H3.75C3.55109 12 3.36032 11.921 3.21967 11.7803C3.07902 11.6397 3 11.4489 3 11.25ZM15.75 4.5C15.5511 4.5 15.3603 4.57902 15.2197 4.71967C15.079 4.86032 15 5.05109 15 5.25V9.75C15 9.94891 15.079 10.1397 15.2197 10.2803C15.3603 10.421 15.5511 10.5 15.75 10.5H20.25C20.4489 10.5 20.6397 10.421 20.7803 10.2803C20.921 10.1397 21 9.94891 21 9.75V5.25C21 5.05109 20.921 4.86032 20.7803 4.71967C20.6397 4.57902 20.4489 4.5 20.25 4.5H15.75ZM19.5 9H16.5V6H19.5V9Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-row w-fill h-fit justify-evenly text-white items-center">
        <button
          className="flex flex-col gap-1 text-xs items-center"
          onClick={() => router.push("/")}
        >
          <div className="bg-gray-800 rounded-full aspect-square p-2">
            <IoIosArrowBack className="w-6 h-6" />
          </div>
          <p>Back</p>
        </button>
        <button>
          <div className="bg-white rounded-full aspect-square p-4 text-black mb-4">
            <AiOutlineCheck className="w-8 h-8" />
          </div>
        </button>
        <button className="flex flex-col gap-1 text-xs items-center">
          <Image
            src="/donald_duck2.png"
            width={64}
            height={64}
            alt=""
            className="w-8 h-8 rounded-full aspect-square"
          />
          <p>Your story</p>
        </button>
      </div>
    </div>
  );
}
