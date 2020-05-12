/// <reference types="react" />
interface ConditionalWrapProps {
  condition: boolean;
  wrap: (children: React.ReactNode) => JSX.Element;
  children: React.ReactNode;
}
declare const _default: ({ condition, children, wrap }: ConditionalWrapProps) => JSX.Element;
export default _default;
