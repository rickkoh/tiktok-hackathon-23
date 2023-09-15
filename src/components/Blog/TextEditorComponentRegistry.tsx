"use client";
import { useContext } from "react";
import {
  FactoryComponentContext,
  registerComponent,
  useRegistryState,
} from "../ComponentFactory/ComponentFactory";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import ReactTextareaAutosize from "react-textarea-autosize";

interface Props {
  id?: number;
  text?: string;
  placeholder?: string;
  editing?: boolean;
}

export default function TextEditor(props: Props) {
  const registryState = useRegistryState(props);

  const [text, setText] = registryState<string>("text");

  const [editing, setEditing] = registryState<boolean>("editing", true);

  const { deleteComponent } = useContext(FactoryComponentContext);

  return (
    <>
      {editing ? (
        <div className="relative flex flex-col">
          <div className="flex flex-row gap-2 absolute left-1/2 top-2 -translate-x-1/2">
            <svg
              width="29"
              height="7"
              viewBox="0 0 29 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="3.5" cy="3.5" r="3.5" fill="#D9D9D9" />
              <circle cx="14.5" cy="3.5" r="3.5" fill="#D9D9D9" />
              <circle cx="25.5" cy="3.5" r="3.5" fill="#D9D9D9" />
            </svg>
          </div>
          <ReactTextareaAutosize
            value={text}
            placeholder={props.placeholder}
            onChange={(e) => setText(e.target.value)}
            className="w-full h-fit focus:outline-none p-2 pt-6 rounded-lg border border-gray-300 text-sm"
          />
          <div className="flex w-full justify-center gap-2">
            {props.id !== undefined && (
              <>
                <button
                  onClick={() => {
                    if (text === undefined || text == "") {
                      deleteComponent(props.id!);
                      return;
                    }
                    setEditing(false);
                  }}
                >
                  <svg
                    width="45"
                    height="45"
                    viewBox="0 0 45 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="23" cy="22" r="18" fill="#E94359" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M29.6262 18.3671C29.7447 18.4831 29.8387 18.621 29.9028 18.7728C29.967 18.9246 30 19.0873 30 19.2517C30 19.416 29.967 19.5787 29.9028 19.7305C29.8387 19.8823 29.7447 20.0202 29.6262 20.1363L21.9919 27.6329C21.8738 27.7493 21.7333 27.8416 21.5788 27.9046C21.4242 27.9676 21.2585 28 21.0911 28C20.9237 28 20.758 27.9676 20.6034 27.9046C20.4489 27.8416 20.3085 27.7493 20.1903 27.6329L16.3731 23.8846C16.2548 23.7684 16.161 23.6305 16.097 23.4787C16.033 23.327 16 23.1643 16 23C16 22.8357 16.033 22.673 16.097 22.5213C16.161 22.3695 16.2548 22.2316 16.3731 22.1154C16.6121 21.8808 16.9361 21.749 17.274 21.749C17.4413 21.749 17.6069 21.7813 17.7615 21.8442C17.9161 21.9071 18.0565 21.9992 18.1748 22.1154L21.0911 24.9816L27.8245 18.3671C27.9427 18.2507 28.0831 18.1584 28.2377 18.0954C28.3923 18.0324 28.558 18 28.7254 18C28.8927 18 29.0584 18.0324 29.213 18.0954C29.3676 18.1584 29.508 18.2507 29.6262 18.3671Z"
                      fill="white"
                    />
                  </svg>
                </button>
                <button onClick={() => deleteComponent(props.id!)}>
                  <svg
                    width="36"
                    height="37"
                    viewBox="0 0 36 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="18" cy="18.5" r="17.5" stroke="#E94359" />
                    <path
                      d="M15.4 16.05C15.5458 16.05 15.6857 16.1079 15.7889 16.2111C15.892 16.3142 15.95 16.4541 15.95 16.6V23.2C15.95 23.3459 15.892 23.4858 15.7889 23.5889C15.6857 23.6921 15.5458 23.75 15.4 23.75C15.2541 23.75 15.1142 23.6921 15.0111 23.5889C14.9079 23.4858 14.85 23.3459 14.85 23.2V16.6C14.85 16.4541 14.9079 16.3142 15.0111 16.2111C15.1142 16.1079 15.2541 16.05 15.4 16.05ZM18.15 16.05C18.2958 16.05 18.4357 16.1079 18.5389 16.2111C18.642 16.3142 18.7 16.4541 18.7 16.6V23.2C18.7 23.3459 18.642 23.4858 18.5389 23.5889C18.4357 23.6921 18.2958 23.75 18.15 23.75C18.0041 23.75 17.8642 23.6921 17.7611 23.5889C17.6579 23.4858 17.6 23.3459 17.6 23.2V16.6C17.6 16.4541 17.6579 16.3142 17.7611 16.2111C17.8642 16.1079 18.0041 16.05 18.15 16.05ZM21.45 16.6C21.45 16.4541 21.392 16.3142 21.2889 16.2111C21.1857 16.1079 21.0458 16.05 20.9 16.05C20.7541 16.05 20.6142 16.1079 20.5111 16.2111C20.4079 16.3142 20.35 16.4541 20.35 16.6V23.2C20.35 23.3459 20.4079 23.4858 20.5111 23.5889C20.6142 23.6921 20.7541 23.75 20.9 23.75C21.0458 23.75 21.1857 23.6921 21.2889 23.5889C21.392 23.4858 21.45 23.3459 21.45 23.2V16.6Z"
                      fill="#E94359"
                    />
                    <path
                      d="M25.3 13.3C25.3 13.5917 25.1841 13.8715 24.9778 14.0778C24.7715 14.2841 24.4917 14.4 24.2 14.4H23.65V24.3C23.65 24.8835 23.4182 25.4431 23.0056 25.8556C22.5931 26.2682 22.0335 26.5 21.45 26.5H14.85C14.2665 26.5 13.7069 26.2682 13.2944 25.8556C12.8818 25.4431 12.65 24.8835 12.65 24.3V14.4H12.1C11.8083 14.4 11.5285 14.2841 11.3222 14.0778C11.1159 13.8715 11 13.5917 11 13.3V12.2C11 11.9083 11.1159 11.6285 11.3222 11.4222C11.5285 11.2159 11.8083 11.1 12.1 11.1H15.95C15.95 10.8083 16.0659 10.5285 16.2722 10.3222C16.4785 10.1159 16.7583 10 17.05 10H19.25C19.5417 10 19.8215 10.1159 20.0278 10.3222C20.2341 10.5285 20.35 10.8083 20.35 11.1H24.2C24.4917 11.1 24.7715 11.2159 24.9778 11.4222C25.1841 11.6285 25.3 11.9083 25.3 12.2V13.3ZM13.8798 14.4L13.75 14.4649V24.3C13.75 24.5917 13.8659 24.8715 14.0722 25.0778C14.2785 25.2841 14.5583 25.4 14.85 25.4H21.45C21.7417 25.4 22.0215 25.2841 22.2278 25.0778C22.4341 24.8715 22.55 24.5917 22.55 24.3V14.4649L22.4202 14.4H13.8798ZM12.1 13.3H24.2V12.2H12.1V13.3Z"
                      fill="#E94359"
                    />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-row w-full justify-between items-center gap-2">
          <ReactMarkdown className="markdown text-sm">{text}</ReactMarkdown>
          <button
            onClick={() => {
              setEditing(true);
            }}
          >
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
      )}
    </>
  );
}

export const loadTextEditorComponent = () => {
  registerComponent("TextEditor", TextEditor);
};
