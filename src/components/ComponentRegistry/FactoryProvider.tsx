import React, { Dispatch, createContext, useEffect } from "react";
import { ComponentRegistryProps } from "./FactoryComponent";

export const FactoryState = createContext<ComponentRegistryProps[]>([]);
export const FactoryDispatch = createContext({} as React.Dispatch<any>);

interface Props {
  state: ComponentRegistryProps[];
  dispatch: Dispatch<any>;
  children?: any;
}

export default function FactoryProvider(props: Props) {
  return (
    <FactoryState.Provider value={props.state}>
      <FactoryDispatch.Provider value={props.dispatch}>
        {props.children}
      </FactoryDispatch.Provider>
    </FactoryState.Provider>
  );
}
