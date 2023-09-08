"use client";
import Image from "next/image";
import {
  registerComponent,
  useRegistryState,
} from "../ComponentFactory.tsx/ComponentFactory";
import { useState } from "react";
import { BsFileImage } from "react-icons/bs";
import { PiImageLight } from "react-icons/pi";

interface Props {
  id: number;
  file?: File;
  altText?: string;
}

function ImageEditor(props: Props) {
  const registryState = useRegistryState(props);

  const [file, setFile] = registryState<File>("file");
  const [imageSrc, setImageSrc] = useState<string>();
  const [altText, setAltText] = registryState<string>("altText");

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

  return (
    <div className="flex flex-col gap-2 w-full h-fit">
      <div
        className={`relative flex flex-row w-full rounded-lg border border-gray-300 ${
          imageSrc === undefined ? "h-32" : "h-fit"
        }`}
      >
        {imageSrc ? (
          <Image
            src={imageSrc ?? ""}
            alt={altText ?? ""}
            width={100}
            height={100}
            objectFit="contain"
            className="w-full h-full rounded-lg"
          />
        ) : (
          <>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full h-full opacity-0 cursor-pointer"
            />
            <div className="absolute top-0 left-0 w-full h-full rounded-lg flex flex-col gap-2 justify-center items-center text-gray-400">
              <PiImageLight className="w-10 h-10" />
              <p>Upload image here</p>
            </div>
          </>
        )}
      </div>
      <input
        placeholder="Alt Text"
        onChange={handleImageChange}
        className="focus:outline-none p-2 rounded-lg border border-gray-300"
      />
    </div>
  );
}

export const loadImageEditorComponent = () => {
  registerComponent("ImageEditor", ImageEditor);
};
