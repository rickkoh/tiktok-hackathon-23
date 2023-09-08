"use client";
import { useContext } from "react";
import {
  FactoryComponentContext,
  registerComponent,
  useRegistryState,
} from "../ComponentFactory.tsx/ComponentFactory";

interface Props {
  id: number;
  text: string;
}

function TextEditor(props: Props) {
  const registryState = useRegistryState(props);

  const [text, setText] = registryState<string>("text");

  const { deleteComponent } = useContext(FactoryComponentContext);

  return (
    <>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full h-fit focus:outline-none"
      />
      <button onClick={() => deleteComponent(props.id)}>
        delete {props.id}
      </button>
    </>
  );
}

export const loadTextEditorComponent = () => {
  registerComponent("TextEditor", TextEditor);
};
