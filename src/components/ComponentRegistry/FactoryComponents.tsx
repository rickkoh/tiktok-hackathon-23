import { useContext } from "react";
import { FactoryState } from "./FactoryProvider";
import { FactoryComponent } from "./FactoryComponent";

export default function FactoryComponents() {
  const state = useContext(FactoryState);

  return (
    <>
      {state.map((e, i) => (
        <FactoryComponent key={i} {...e} />
      ))}
    </>
  );
}
