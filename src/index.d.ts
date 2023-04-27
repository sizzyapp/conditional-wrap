/// <reference types="react" />
interface ConditionalWrapProps {
  condition: boolean;
  wrap: (children: React.ReactNode) => JSX.Element;
  children: React.ReactNode;
}

declare const ConditionalWrap: ({ condition, children, wrap }: ConditionalWrapProps) => JSX.Element;
export { ConditionalWrap, ConditionalWrap as default };
