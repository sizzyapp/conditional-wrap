/// <reference types="react" />
interface ConditionalWrapProps {
  condition: boolean;
  wrap: (children: JSX.Element) => JSX.Element;
  children: JSX.Element;
}
declare const _default: ({ condition, children, wrap }: ConditionalWrapProps) => JSX.Element;
export default _default;
