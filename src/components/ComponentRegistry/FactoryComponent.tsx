import { createElement, ComponentType, memo } from "react";

export interface ComponentRegistryProps {
  type: string;
  props?: any;
  children?: ComponentRegistryProps[];
}

// Registry Component Registry Type
interface ComponentRegistryType<T> {
  [key: string]: ComponentType<T>;
}

// Initialize the registry
const components: ComponentRegistryType<any> = {};

// Get a component from the registry
function getComponent<T>(key: string): ComponentType<T> {
  if (components[key] === undefined) {
    const empty = () => <></>;
    return empty;
  }
  return components[key];
}

// Register a component in the registry
// export function registerComponent<T>(key: string, component: ComponentType<T>) {
// components[key] = component;
// }

// Register a component in the registry
export function registerComponent<T>(key: string, component: ComponentType<T>) {
  const MemoizedComponent = memo(component, (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
  });
  components[key] = MemoizedComponent;
}

// Registry Component
export function FactoryComponent<T extends ComponentRegistryProps>(
  props: T
): JSX.Element {
  return createElement(
    getComponent(props.type),
    props.props,
    props.children?.map(FactoryComponent)
  );
}
