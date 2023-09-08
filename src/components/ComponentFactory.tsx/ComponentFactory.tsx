// Import necessary modules and components from React
"use client";
import {
  createElement,
  ComponentType,
  memo,
  createContext,
  useContext,
  useReducer,
  useState,
  useMemo,
  useCallback,
} from "react";

// Define a counter to generate unique IDs
let counter = 0;
function nextId() {
  counter += 1;
  return counter;
}

// Define the interface for a component registry entry
export interface ComponentRegistry {
  type: string;
  props?: any;
  children?: FactoryComponentProps[];
}

// Define the interface for component props, including a unique ID
export interface FactoryComponentProps extends ComponentRegistry {
  id: number;
}

// Define a dictionary to store registered components
interface ComponentRegistryType<T> {
  [key: string]: ComponentType<T>;
}

// Initialize the component registry
const componentRegistry: ComponentRegistryType<any> = {};

// Get a component from the registry
function getComponent<T>(key: string): ComponentType<T> {
  if (componentRegistry[key] === undefined) {
    // Return an empty component if the component is not found
    const empty = () => <></>;
    return empty;
  }
  return componentRegistry[key];
}

// Register a component in the registry
export function registerComponent<T>(key: string, component: ComponentType<T>) {
  // Memoize the component to optimize rendering
  const MemoizedComponent = memo(component, (prevProps, nextProps) => {
    // Compare props to determine if a re-render is needed
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
  });
  componentRegistry[key] = MemoizedComponent;
}

// Create a context to manage factory components
export const FactoryComponentContext = createContext<{
  components: FactoryComponentProps[];
  addComponent: (component: ComponentRegistry) => void;
  addAllComponents: (component: ComponentRegistry[]) => void;
  updateComponent: (
    i: number,
    component: Partial<FactoryComponentProps>
  ) => void;
  deleteComponent: (i: number) => void;
}>({
  components: [],
  addComponent: () => {},
  addAllComponents: () => {},
  updateComponent: () => {},
  deleteComponent: () => {},
});

// Define a provider component to manage factory components
export function FactoryComponentProvider({ children }: { children?: any }) {
  // Use a reducer to manage factory components
  const [components, dispatch] = useReducer(componentReducer, []);

  // Add a component to the registry
  function addComponent(component: ComponentRegistry) {
    dispatch({ type: "add", payload: { ...component } });
  }

  function addAllComponents(components: ComponentRegistry[]) {
    dispatch({ type: "addAll", payload: components });
  }

  // Update a component in the registry
  function updateComponent(
    id: number,
    component: Partial<FactoryComponentProps>
  ) {
    dispatch({ type: "update", payload: { id, component } });
  }

  // Delete a component from the registry
  function deleteComponent(id: number) {
    console.log("called delete", id);
    dispatch({ type: "delete", payload: { id } });
  }

  // Create the context provider value
  const providerValue = {
    components,
    addComponent,
    addAllComponents,
    updateComponent,
    deleteComponent,
  };

  return (
    <FactoryComponentContext.Provider value={providerValue}>
      {children}
    </FactoryComponentContext.Provider>
  );
}

// Render a factory component using createElement
export function FactoryComponent<T extends FactoryComponentProps>(
  component: T
): JSX.Element {
  component.props.id = component.id;
  return createElement(
    getComponent(component.type),
    component.props,
    component.children?.map(FactoryComponent)
  );
}

// Render all factory components from the context
export function FactoryComponents() {
  const { components: componentsReducer } = useContext(FactoryComponentContext);

  return (
    <>
      {componentsReducer.map((props, i) => {
        const key = props.id ? props.id : nextId();
        props.id = key;
        return <FactoryComponent key={key} {...props} />;
      })}
    </>
  );
}

// Define a reducer to manage factory components
function componentReducer(
  components: FactoryComponentProps[],
  action: any
): FactoryComponentProps[] {
  switch (action.type) {
    case "add":
      return [...components, { ...action.payload }];
    case "addAll":
      return [
        ...components,
        ...action.payload.map((e: FactoryComponentProps) => ({
          id: e.id,
          type: e.type,
          props: e.props,
        })),
      ];
    case "update":
      return components.map((e) =>
        e.id === action.payload.id
          ? {
              ...e,
              props: {
                ...action.payload.component.props,
              },
            }
          : e
      );
    case "delete":
      return components.filter((prop, i) => {
        return prop.id !== action.payload.id;
      });
    case "set":
      return action.payload;
    default:
      return components;
  }
}

export function useRegistryState(props: Record<string, any>) {
  function registryState<T>(
    key: string,
    initialValue?: T
  ): [T, (value: T) => void] {
    const [state, setState] = useState<T>(
      initialValue ? initialValue : props[key]
    );

    const { updateComponent } = useContext(FactoryComponentContext);

    const stateMemo: T = useMemo(() => {
      return state;
    }, [state]);

    const setStateHook = useCallback((value: T) => {
      if (updateComponent !== undefined) {
        updateComponent(props.id, {
          props: {
            [key]: value,
          },
        });
      }

      setState(value);
    }, []);

    return [stateMemo, setStateHook];
  }
  return registryState;
}
