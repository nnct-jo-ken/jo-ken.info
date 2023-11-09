import type {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  ForwardRefExoticComponent,
  ForwardRefRenderFunction,
  ReactNode,
} from "react";
import { forwardRef as reactForwardRef } from "react";

type RightJoin<T, U> = Omit<T, keyof U> & U;

type MergePropsWithAs<
  Component extends ElementType,
  AdditionalProps extends object,
> = RightJoin<ComponentPropsWithRef<Component>, AdditionalProps> & {
  as?: Component;
};

type ForwardRefExoticComponentWithoutFunction = Pick<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ForwardRefExoticComponent<any>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  keyof ForwardRefExoticComponent<any>
>;

export interface ComponentWithAs<
  BaseComponent extends ElementType,
  Props extends object = object,
> extends ForwardRefExoticComponentWithoutFunction {
  <AsComponent extends ElementType = BaseComponent>(
    props: MergePropsWithAs<AsComponent, Props>,
  ): ReactNode;
}

export function forwardRef<
  Component extends ElementType,
  Props extends object = object,
>(
  displayName: string,
  render: ForwardRefRenderFunction<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any,
    RightJoin<ComponentPropsWithoutRef<Component>, Props> & { as?: ElementType }
  >,
): ComponentWithAs<Component, Props> {
  const component = reactForwardRef(render) as unknown as ComponentWithAs<
    Component,
    Props
  >;

  component.displayName = displayName;

  return component;
}
