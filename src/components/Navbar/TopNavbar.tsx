import Image from "next/image";

function TopNavbar() {
  return (
    <header className="fixed z-10 flex w-full justify-around items-center align-middle text-secondary text-bold text-base my-10">
      <Image src="/live_icon.png" alt={"Live Icon"} width={25} height={5} />
      <p>Singapore</p>
      <p>Following</p>
      <span className="relative">
        <p className="font-semibold">For You</p>
        <span className="w-6 h-0.5 bg-secondary absolute left-1/2 -translate-x-1/2 translate-y-0.5" />
      </span>
      <Image
        className="align-middle"
        src="/search_icon.png"
        alt={"Live Icon"}
        width={25}
        height={10}
      />
    </header>
  );
}

export default TopNavbar;
