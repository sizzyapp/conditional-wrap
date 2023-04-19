/// <reference types="react" />
interface ConditionalWrapProps {
  condition: boolean;
  wrap: (children: JSX.Element) => JSX.Element;
  children: JSX.Element;
}

declare const ConditionalWrap: ({ condition, children, wrap }: ConditionalWrapProps) => JSX.Element;
export { ConditionalWrap, ConditionalWrap as default };
