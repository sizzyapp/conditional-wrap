/// <reference types="react" />
interface ConditionalWrapProps {
  condition: boolean;
  wrap: (children: React.ReactNode) => React.ReactNode;
  children: React.ReactNode;
}
declare const _default: ({ condition, children, wrap }: ConditionalWrapProps) => React.ReactNode;
export default _default;
