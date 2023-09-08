"use client";
import {
  registerComponent,
  useRegistryState,
} from "../ComponentFactory.tsx/ComponentFactory";

interface Props {
  id: number;
  productUrl?: string;
}

function ProductEditor(props: Props) {
  const registryState = useRegistryState(props);

  const [productUrl, setText] = registryState<string>("productUrl");

  // const { deleteComponent, updateComponentType } = useContext(
  // FactoryComponentContext
  // );

  return (
    <input
      value={productUrl}
      placeholder="Product url"
      onChange={(e) => setText(e.target.value)}
      className="w-full h-fit focus:outline-none p-2 rounded-lg border border-gray-300"
    />
  );
}

export const loadProductEditorComponent = () => {
  registerComponent("ProductEditor", ProductEditor);
};
