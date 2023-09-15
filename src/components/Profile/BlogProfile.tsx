import { Tables } from "@/types";
import { format } from "date-fns";
import Image from "next/image";

interface Props {
  user?: Tables<"user_profiles">;
  minRead?: number;
  date?: Date;
}

export default function BlogProfile(props: Props) {
  return (
    <div className="flex flex-row gap-3 items-center">
      <Image
        src="/dp.jpeg"
        width={64}
        height={64}
        alt=""
        className="w-12 h-12 rounded-full aspect-square"
      />
      <div className="flex flex-col leading-none">
        <div>{props.user?.name ?? `Cap&apos;n Crunch`}</div>
        <div className="text-gray-400">{props.minRead ?? "5"} min read</div>
      </div>
      <div className="flex flex-col leading-none ml-2">
        <button className="text-red-400 text-start hover:text-red-500">
          Follow
        </button>
        <div className="text-gray-400">
          {props.date ? format(props.date, "MMM d, yyyy") : "Sep 5, 2023"}
        </div>
      </div>
    </div>
  );
}
