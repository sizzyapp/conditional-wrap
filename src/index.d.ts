/// <reference types="react" />
interface ConditionalWrapProps {
  condition: boolean;
  wrap: (children: React.ReactNode) => React.ReactNode;
  children: React.ReactNode;
}
declare const _default: ({ condition, children, wrap }: ConditionalWrapProps) => JSX.Element;
export default _default;
