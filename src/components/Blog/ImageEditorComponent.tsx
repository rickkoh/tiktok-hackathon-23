"use client";
import Image from "next/image";
import {
  registerComponent,
  useRegistryState,
} from "../ComponentFactory.tsx/ComponentFactory";
import { useCallback, useEffect, useState } from "react";
import { BsFileImage } from "react-icons/bs";
import { PiImageLight } from "react-icons/pi";

interface Props {
  id: number;
  file?: File;
  altText?: string;
  editing?: boolean;
}

function ImageEditor(props: Props) {
  const registryState = useRegistryState(props);

  const [file, setFile] = registryState<File>("file");
  const [imageSrc, setImageSrc] = useState<string>();
  const [altText, setAltText] = registryState<string>("altText");
  const [editing, setEditing] = registryState<boolean>("editing", true);

  function handleImageChange(e: any) {
    // Store the file to the bucket
    // Get the url
    // Set the url to the image src
    const file = e.target.files?.[0];
    if (file) {
      console.log(file);
      setFile(file);
      setImageSrc(URL.createObjectURL(file));
    }
  }

  useEffect(() => {
    setEditing(imageSrc === undefined);
  }, [imageSrc]);

  return (
    <div className="flex flex-col gap-2 w-full h-fit">
      {/**
       * editing:
       * upload image and alt text input
       * save:
       * image and alt text
       */}
      <div
        className={`relative flex flex-row w-full rounded-lg border border-gray-300 ${
          editing || imageSrc === undefined ? "h-32" : "h-fit"
        }`}
      >
        {!editing && imageSrc !== undefined ? (
          <div className="flex flex-row gap-2 items-center">
            <div>
              <Image
                src={imageSrc ?? ""}
                alt={altText ?? ""}
                width={100}
                height={100}
                objectFit="contain"
                className="w-full h-full rounded-lg"
              />
              <p className="text-gray-500 text-sm">{altText}</p>
            </div>
            <button onClick={() => setImageSrc(undefined)}>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.6 6.04187L15.96 2.40093C16.4642 2.05501 17.0735 1.89641 17.6823 1.95263C18.2912 2.00885 18.8611 2.27634 19.2934 2.70872C19.7257 3.1411 19.993 3.71111 20.049 4.3199C20.105 4.9287 19.9461 5.5379 19.6 6.04187ZM2.33871 16.6896L5.31114 19.6615L1.99471 20.0057L2.33871 16.6896ZM15.2667 3.03442L2.63693 15.6624L6.33847 19.3635L18.968 6.73512L15.2667 3.03442ZM19.9627 2.03942C19.2955 1.37381 18.3915 1 17.449 1C16.5065 1 15.6025 1.37381 14.9353 2.03942L1.64226 15.3308C1.5665 15.4072 1.519 15.507 1.5076 15.6139L1.00249 20.4829C0.995733 20.5483 1.00277 20.6143 1.02315 20.6767C1.04353 20.7391 1.0768 20.7965 1.12079 20.8453C1.16478 20.894 1.21853 20.933 1.27854 20.9596C1.33855 20.9863 1.40349 21 1.46915 21C1.48515 21 1.50115 21 1.5176 20.9978L6.38714 20.4927C6.49407 20.4813 6.59393 20.4338 6.67025 20.3581L19.9627 7.06709C20.627 6.39928 21 5.49564 21 4.5537C21 3.61175 20.627 2.70811 19.9627 2.0403V2.03942Z"
                  fill="#E94359"
                  stroke="#E94359"
                  stroke-width="0.5"
                />
              </svg>
            </button>
          </div>
        ) : (
          <>
            <div className="absolute top-0 left-0 w-full h-full rounded-lg flex flex-col gap-2 justify-center items-center text-gray-400">
              <PiImageLight className="w-10 h-10" />
              <p>Upload image here</p>
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full h-full opacity-0 cursor-pointer"
            />
          </>
        )}
      </div>
      <input
        placeholder="Alt Text"
        value={altText ?? ""}
        onChange={(e) => setAltText(e.target.value)}
        className="focus:outline-none p-2 rounded-lg border border-gray-300"
      />
    </div>
  );
}

export const loadImageEditorComponent = () => {
  registerComponent("ImageEditor", ImageEditor);
};
