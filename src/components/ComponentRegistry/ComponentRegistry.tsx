import { createElement, ComponentType, Key } from "react";

export interface ComponentRegistryProps {
  key?: Key;
  type: string;
  props?: any;
  children?: ComponentRegistryProps[];
  sort_order?: number;
  state?: "loaded" | "new" | "deleted" | "updated";
  data?: any;
}

// Registry Component Registry Type
interface ComponentRegistryType<T> {
  [key: string]: ComponentType<T>;
}

// Initialize the registry
const registeredComponent: ComponentRegistryType<any> = {};

// Get a component from the registry
function getComponent<T>(key: string): ComponentType<T> {
  if (registeredComponent[key] === undefined) {
    const empty = () => <></>;
    return empty;
  }
  return registeredComponent[key];
}

// Register a component in the registry
export function registerComponent<T>(key: string, component: ComponentType<T>) {
  registeredComponent[key] = component;
}

// Registry Component
export function ComponentRegistry<T extends ComponentRegistryProps>(
  props: T
): JSX.Element {
  return createElement(
    getComponent(props.type),
    props.props,
    props.children?.map(ComponentRegistry)
  );
}
